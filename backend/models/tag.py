
#?SqlAlchemy
import sqlalchemy

#?Metadata
from db import metadata


#!Tag
tag = sqlalchemy.Table(
    'tags',
    metadata,
    sqlalchemy.Column('id',sqlalchemy.Integer,primary_key=True),
    sqlalchemy.Column('name',sqlalchemy.String(50),unique=True,nullable=False),
    sqlalchemy.Column('slug',sqlalchemy.String(50),unique=True,nullable=True)
)


