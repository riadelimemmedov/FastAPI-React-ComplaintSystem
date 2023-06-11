
#?SqlAlchemy
import sqlalchemy

#?Metadata
from db import metadata


#!Comment
comment = sqlalchemy.Table(
    'comments',
    metadata,
    sqlalchemy.Column('id',sqlalchemy.Integer,primary_key=True),
    sqlalchemy.Column('body',sqlalchemy.Text,nullable=False),
    sqlalchemy.Column('user_id',sqlalchemy.ForeignKey('users.id'),nullable=False),
    sqlalchemy.Column('created_at',sqlalchemy.DateTime,server_default=sqlalchemy.func.now()),
    sqlalchemy.Column('updated_at',sqlalchemy.DateTime,server_default=sqlalchemy.func.now(),onupdate=sqlalchemy.func.now()),
)
