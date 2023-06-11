
#?SqlAlchemy
import sqlalchemy

#?Metadata
from db import metadata


#!Tag
bookmark = sqlalchemy.Table(
    'bookmarks',
    metadata,
    sqlalchemy.Column('id',sqlalchemy.Integer,primary_key=True),
    sqlalchemy.Column("complaint_id", sqlalchemy.ForeignKey("complaints.id")),
    sqlalchemy.Column('user_id',sqlalchemy.ForeignKey('users.id'))
)
