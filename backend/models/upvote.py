
#?SqlAlchemy
import sqlalchemy

#?Metadata
from db import metadata


#!Upvote
upvote = sqlalchemy.Table(
    'upvotes',
    metadata,
    sqlalchemy.Column('id',sqlalchemy.Integer,primary_key=True),
    sqlalchemy.Column('counter',sqlalchemy.Integer,default=0),
    sqlalchemy.Column("complaint_id", sqlalchemy.ForeignKey("complaints.id")),
    sqlalchemy.Column('user_id',sqlalchemy.ForeignKey('users.id'))
)