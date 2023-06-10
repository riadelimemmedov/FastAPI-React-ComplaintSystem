#

# ?FastApi
# ?Pyhon modules and Functions
import re

from email_validator import EmailNotValidError
from email_validator import validate_email as validate_user_email
from fastapi import Depends, FastAPI, HTTPException, Request, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from pydantic import BaseModel, EmailStr, SecretStr, validator

#?UserBase
from schemas.base import UserBase


#?Helpers methods and variable
from utils.helpers import phone_number_pattern


# *UserRegisterIn
class UserRegisterIn(UserBase):
    password: str
    phone: str
    first_name: str
    last_name: str
    full_name: str
    iban: str

    # validate_phone
    @validator("phone")
    def validate_phone(cls, phone):
        if re.match(phone_number_pattern, phone) and len(phone) ==  12 and phone.isdigit():
            return phone
        else:
            raise ValueError("Phone number must be in this format:994xxxxxxxxx'")

    # validate_full_name
    @validator("full_name")
    def validate_full_name(cls, full_name):
        try:
            first_name, last_name = full_name.split()
            return full_name
        except Exception as ex:
            raise ValueError("You should provide at least first_name and last_name")


# *UserLoginIn
class UserLoginIn(UserBase):
    password: str
