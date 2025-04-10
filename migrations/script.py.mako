"""${message}

Revision ID: ${up_revision}
Revises: ${down_revision | comma,n}
Create Date: ${create_date}

"""
from alembic import op
import sqlalchemy as sa
import os

# Get the environment and schema name for conditional schema prefixing
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

${imports if imports else ""}

# revision identifiers, used by Alembic.
revision = ${repr(up_revision)}
down_revision = ${repr(down_revision)}
branch_labels = ${repr(branch_labels)}
depends_on = ${repr(depends_on)}

def upgrade() -> None:
    ${upgrades if upgrades else "pass"}

    # Add schema prefixing for production environment
    if environment == "production":
        for table_name in ["users", "jobs"]:
            op.execute(f"ALTER TABLE {table_name} SET SCHEMA {SCHEMA};")

def downgrade() -> None:
    ${downgrades if downgrades else "pass"}

    # Remove schema prefixing for production environment
    if environment == "production":
        for table_name in ["jobs","users"]:
            op.execute(f"ALTER TABLE {table_name} SET SCHEMA public;")
