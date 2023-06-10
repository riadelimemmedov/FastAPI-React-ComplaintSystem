import re

def validate_email_format(email_address):
    pattern = r'^[\w\.-]+@[\w\.-]+\.(ru|com)$'
    is_valid_format = re.match(pattern, email_address) is not None
    return is_valid_format

# Example usage
email = "user-|mailru.com"
is_valid_format = validate_email_format(email)
if is_valid_format:
    print("Email format is valid.")
else:
    print("Email format is invalid.")
