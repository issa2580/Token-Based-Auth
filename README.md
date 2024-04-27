🔐 Token-based auth
JWT authentication uses digitally signed tokens containing user information to allow secure and verified access to websites or applications without needing to repeatedly log in. Let’s take a look at the step-by-step workflow of token-based authentication.

1. User Login Request:
Users log in by sending their email and password to the server through a specific request.

2. Credential Verification:
The server verifies the provided credentials against the stored user data.

3. Token Generation:
Upon successful verification, the server creates a token (commonly JWT - JSON Web Token). This token holds user information (claims) such as user_id, permissions.

4. Token Signing and Hashing:
The token is signed with a secret key and processed with a hashing algorithm (like SHA256) to create a hash.

5. Sending the Token:
The server sends this token to the client, which stores it, typically in the browser.

6. Token Storage Options:
The client can store the token in different ways like HttpOnly Cookies, Session Storage, or Local Storage. Storing in HttpOnly Cookies is recommended as it prevents JavaScript access, enhancing security against XSS attacks.

7. Token Expiry and Security:
Tokens often have an expiration time to enhance security.

8. Including Token in Requests:
For every request to the server, the client sends the token in the Authorization header.
