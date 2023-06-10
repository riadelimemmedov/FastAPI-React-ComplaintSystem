#

# ?FastApi
# ?Python modules and function
import base64

from fastapi import Depends, FastAPI, HTTPException, Request, status


#!decode_photo
def decode_photo(path, encoded_string):
    with open(path, "wb") as f:
        try:
            f.write(base64.b64decode(encoded_string.encode("utf-8")))
        except HTTPException as ex:
            raise HTTPException(400, "Invalid photo encoding")
        

#Regex Pattern List
domain_pattern = r'^[\w\.-]+@[\w\.-]+\.(ru|com|az|org|net|edu|gov|mil|io|co|me|info|biz|tv|online|store|xyz)$'
body_pattern = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$' 
phone_number_pattern = "994\s?\d{2}[2-9]\d{6}"
