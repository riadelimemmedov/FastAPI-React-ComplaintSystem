#

# ?FastApi
# ?Third Party packages for FastApi
from email_validator import EmailNotValidError
from email_validator import validate_email as validate_user_email
from fastapi import Depends, FastAPI, HTTPException, Request, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from pydantic import BaseModel, EmailStr, SecretStr, validator

import re
from utils.helpers import domain_pattern,body_pattern

#!BaseComplaint
class BaseComplaint(BaseModel):
    title: str
    description: str
    amount: float


#!UserBase
class UserBase(BaseModel):
    email: EmailStr
    
    
    #validate_email_domain
    @staticmethod
    def validate_email_domain(email):
        is_valid_format = re.match(domain_pattern,email) is not None
        return is_valid_format

    # validate_email
    @validator("email")
    def validate_email(cls, email):        
        try:
            if(re.search(body_pattern,email) and cls.validate_email_domain(email) ):
                return email
            else:
                raise ValueError('Please input valid email format')
        except EmailNotValidError:
            raise ValueError("Email is not valid format")
