from app.models import db, User,Job, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_jobs():
    for i in range(1,6):
        demo = Job(
        vjk=f"2ea0126072a3782{i}",
        advn=f"127860249857329{i}",
        site='indeed',
        title=f'Python Developer #{i}',
        pay='$45 - $55 an hour - Contract',
        companyName='Inceed',
        link='https://smartapply.indeed.com/beta/indeedapply/form/profile-location',
        description='''<div id="jobDescriptionText" class="jobsearch-jobDescriptionText jobsearch-JobComponent-description css-kqe8pq eu4oa1w0"><div><span></span></div><div>
 <p><b>Compensation:</b><b> </b>$45-55/hr<br> <b>Location:</b><b> </b><b>Kansas City, MO</b><br> <b>Python Developer:</b></p>
 <p>Inceed has partnered with a great company to help find a skilled <b>Python Developer</b> to join their team!</p>
 <div>
  <b>Responsibilities:</b>
 </div>
 <ul>
  <li>Work on custom internal applications </li>
  <li>Resource forecasting applications </li>
  <li>Collaborate with a team of full stack developers </li>
  <li>Scrum/Agile environment </li>
  <li>Use Azure DevOps for planning, tickets, and reporting </li>
 </ul>
 <div>
  <b>Required Qualifications &amp; Experience:</b>
 </div>
 <ul>
  <li>5+ years of experience in web development </li>
  <li>Extensive experience with Python development </li>
  <li>Experience with Django framework </li>
  <li>Experience with front end development (CSS, Javascript, HTML) </li>
  <li>Ability to work independently with little oversight </li>
 </ul>
 <div>
  <b>Nice to Have Skills &amp; Experience:</b>
 </div>
 <ul>
  <li>Experience with cloud infrastructure/deploying applications to cloud </li>
  <li>Experience with containerized applications </li>
  <li>Database experience in PostgreSQL </li>
 </ul>
 <div>
  <b>Perks &amp; Benefits: </b>
 </div>
 <ul>
  <li>3 different medical health insurance plans, dental, and vision insurance </li>
  <li>Voluntary and Long-term disability insurance </li>
  <li>Paid Time Off, 401k, and Holiday Pay* </li>
  <li>Weekly direct deposit or pay card deposit</li>
 </ul>
 <br>
 <p><br> If you are interested in learning more about the Python Developer opportunity, please submit your resume for consideration. We are unable to provide sponsorship at this time. </p>
 <p><i>We are Inceed, a staffing and direct placement firm who believes in the possibility of something better. Our mission is simple: We’re here to help every person, whether client, candidate, or employee, find and secure what’s better for them. </i></p>
 <p><i>Inceed is an equal opportunity employer. Inceed prohibits discrimination and harassment of any type and affords equal employment opportunities to employees and applicants without regard to race, color, religion, sex, sexual orientation, gender identity or expression, pregnancy, age, national origin, disability status, genetic information, protected veteran status, or any other characteristic protected by law.</i></p>
 <p>#LI-AA1<br> #LI-Onsite<br> #INDRAL</p>
</div></div>''',
        user_id=1
        )

        db.session.add(demo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_jobs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.jobs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM jobs"))

    db.session.commit()
