"""add images for MDFCs

Revision ID: ef4dee0ad437
Revises: 155199534481
Create Date: 2021-07-26 12:15:54.380110

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ef4dee0ad437'
down_revision = '155199534481'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cards', sa.Column('opp_image_uri', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cards', 'opp_image_uri')
    # ### end Alembic commands ###
