
#?SqlAlchemy
import sqlalchemy

#?Metadata
from db import metadata


#!Tag
category = sqlalchemy.Table(
    'categories',
    metadata,
    sqlalchemy.Column('id',sqlalchemy.Integer,primary_key=True),
    sqlalchemy.Column('name',sqlalchemy.String(50),unique=True,nullable=False),
    sqlalchemy.Column('slug',sqlalchemy.String(50),unique=True,nullable=True)
)


