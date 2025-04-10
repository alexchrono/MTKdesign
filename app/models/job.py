from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Job(db.Model):
    __tablename__ = 'jobs'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    jobId = db.Column(db.String(100))
    vjk = db.Column(db.String(100))
    advn = db.Column(db.String(100))
    site = db.Column(db.String(30), nullable=False)
    title = db.Column(db.String(100))
    pay = db.Column(db.String(100))
    companyName = db.Column(db.String(100))
    link = db.Column(db.String(400))
    description = db.Column(db.Text)


    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))

    def to_dict(self):
        return {
        'id': self.id,
        'jobId': self.jobId,
        'vjk': self.vjk,
        'advn': self.advn,
        'site': self.site,
        'title': self.title,
        'pay': self.pay,
        'companyName': self.companyName,
        'link': self.link,
        'description': self.description,
        'user_id': self.user_id
    }
