Main Route:

API Endpoint: GET => “/”

- Description: Landing page of the application.
- Responses:
  - 200: Returns the landing page. First thing any User sees.

Authentication Routes:

Login:

API Endpoint: POST => “/login”

- Description: Authenticate a user and return a token.
- Responses:
  - 200: Returns a JWT token and user details.
  - 400: Invalid credentials.
  - 500: General server error.

Register:

API Endpoint: POST => “/register”

- Description: Register a new user.
- Responses:
  - 201: User successfully registered.
  - 400: Validation error (e.g., missing fields, invalid credentials).
  - 500: General server error.

User Routes:

Get User Profile:

API Endpoint: GET => “/users/me”

- Description: Fetch the logged-in user’s profile.
- Responses:
  - 200: Returns user profile details.
  - 401: Unauthorized (user not logged in).

Update User Profile:

API Endpoint: PUT => “/users/me”

- Description: Update the logged-in user’s profile.
- Responses:
  - 200: Profile successfully updated.
  - 400: Validation error.
  - 401: Unauthorized.

Itinerary Routes:

Get All Itineraries:

API Endpoint: GET => “/itineraries”

- Description: Fetch all itineraries for the logged-in user.
- Responses:
  - 200: Returns a list of itineraries.
  - 401: Unauthorized.

Get a Specific Itinerary:

API Endpoint: GET => “/itineraries/:id”

- Description: Fetch details of a specific itinerary.
- Responses:
  - 200: Returns itinerary details.
  - 404: Itinerary not found.
  - 401: Unauthorized.

Create a New Itinerary:

API Endpoint: POST => “/itineraries”

- Description: Create a new itinerary.
- Responses:
  - 201: Itinerary successfully created.
  - 400: Validation error.
  - 401: Unauthorized.

Update an Itinerary:

API Endpoint: PUT => “/itineraries/:id”

- Description: Update an existing itinerary (e.g., add accommodations or activities).
  Responses:
- 200: Itinerary successfully updated.
  - 400: Validation error.
  - 404: Itinerary not found.
  - 401: Unauthorized.

Delete an Itinerary:

API Endpoint: DELETE => “/itineraries/:id”

- Description: Delete an itinerary.
- Responses:
  - 200: Itinerary successfully deleted.
  - 404: Itinerary not found.
  - 401: Unauthorized.

File Upload Routes:

Upload Confirmation Email:

API Endpoint: POST => “/uploads”

- Description: Upload a confirmation email or image for an itinerary.
- Responses:
  - 201: File successfully uploaded.
  - 400: Validation error (e.g., unsupported file type).
  - 401: Unauthorized.
  - 500: General server error.

Map Integration Routes:

Get Location Details:

API Endpoint: GET => “/maps/location”

- Description: Fetch location details using a query parameter (e.g., ?address=123+Main+St).
- Responses:
  - 200: Returns location details.
  - 400: Invalid query parameter.
  - 500: General server error.

Get Routes Between Locations:

API Endpoint: GET => “/maps/routes”

- Description: Fetch routes between locations (e.g., ?from=123+Main+St&to=456+Elm+St).
- Responses:
  - 200: Returns route details (distance, duration, etc.).
  - 400: Invalid query parameters.
  - 500: General server error.

Sharing Routes:

Share an Itinerary:

API Endpoint: POST => “/itineraries/:id/share”

- Description: Share an itinerary with another user or generate a shareable link.
- Responses:
  - 200: Itinerary successfully shared.
  - 400: Validation error.
  - 401: Unauthorized.
  - 404: Itinerary not found.

Error Handling:

For all routes, include consistent error handling:

- 400: Bad Request (e.g., validation errors, missing fields).
- 401: Unauthorized (e.g., user not logged in).
- 403: Forbidden (e.g., user trying to access another user’s data).
- 404: Not Found (e.g., itinerary or user not found).
- 500: Internal Server Error (e.g., database or server issues).
