from flask import Blueprint, jsonify, request
from google.oauth2 import id_token
from google.auth.transport import requests
from app.models import User,db,Job
from flask_login import current_user, login_user, logout_user, login_required
import os

YOUR_CLIENT_ID = os.environ.get('CLIENT_ID')

interact_routes = Blueprint('interact', __name__)

@interact_routes.route('/get-jobs', methods=['GET'])
def get_all_jobs():
    if current_user.is_authenticated:
        allJobs = Job.query.filter(Job.user_id == current_user.id).all()
        if allJobs:
            returnObj = {'allJobs': {job.id: job.to_dict() for job in allJobs}}
            return jsonify(returnObj)
            # returnObj = {'allJobs': [job.to_dict() for job in allJobs]}
            # return jsonify(returnObj)
        else:
            return jsonify({"message": "No Job interactions found for the current user."}), 404
    else:
        return jsonify({"message": "User not authenticated."}), 401




@interact_routes.route('/indeed', methods=['POST'])
def handle_indeed_interaction():
    data=request.json
    authorization_header = request.headers.get('Authorization')
    if authorization_header and authorization_header.startswith("Bearer "):
        token = authorization_header.split(" ")[1]
        try:
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), YOUR_CLIENT_ID)
            if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                raise ValueError('Wrong issuer.')

            # Get the user's email from idinfo
            user_email = idinfo.get('email')
            if not user_email:
                raise ValueError('Email scope was not granted or email could not be retrieved.')

            ourUser = User.query.filter(User.email == user_email).first()

            if not ourUser:
    # Handle the case where no user is found
                return jsonify({"status": "failure", "message": "User not found"}), 404

            ourRealUser=ourUser
            ord= data.get('data')
            requestSite=data.get('site')

            if requestSite=='indeed':
                ourNewJob= Job(vjk=data.get('vjk'),advn=data.get('advn'),user_id=ourRealUser.id,site='indeed',title=ord.get('title'), pay=ord.get('pay'),companyName=ord.get('companyName'),link=ord.get('link'),description=ord.get('description'))
            if requestSite=='linked':
                ourNewJob= Job(jobId=data.get('jobId'),user_id=ourRealUser.id,site='linked',title=ord.get('title'), pay=ord.get('pay'),companyName=ord.get('companyName'),link=ord.get('link'),description=ord.get('description'))


            db.session.add(ourNewJob)
            db.session.commit()

            return jsonify({"status": "success", "message": "Data received successfully.", "email": user_email})
        except ValueError as e:
            # Handle the error more specifically if you like
            return jsonify({"status": "failure", "message": str(e)}), 401
    else:
        return jsonify({"status": "failure", "message": "Authorization header missing or invalid"}), 401
