Install this folder at the root of your program.

Go to script.py.mako and go to line 38.
change the array in this:
    if environment == "production":
        for table_name in ["users", "parties", "characters", "campaigns"]:

to be an array of your actual table-names.  NOt the model names.



Delete your instance and migration folders.

Run the following command:
alembic init --template=custom_scripts migrations

if you do this, every time you generate new migrations everything will be already filled out.   Have a good one.
