### Capstone Step 2: Project Proposal

## Project Proposal: Travel Planning App

### Type and Goal

- A web application designed to ease travel by helping users organize their travel plans.

### Users

- Anyone who is planning to travel.

### Features

- The application will have a user-friendly interface where users can:
  - Submit confirmation details for accommodations (e.g., hotels, flights, car rentals, activities, reservations, etc.) and the app will create or update an itinerary for the user.
  - Interact with a map which will include location data, routes, and points of interest.
  - Share itineraries with other users that they are traveling with.

### General Technical Details

- **Application Type:**
  - Full-stack web development.
- **Data:**
  - Received data from users, logic to filter and re-render itinerary based on user data.
  - Use of Leaflet (JavaScript Library) and OpenStreetMap API (external) for map data which will include location, routes, and points of interest.
  - Logic to connect with other users and share itineraries.
- **Stack:**
  - **Front-end:** React.
  - **Back-end:** Node.js, Express.
  - **Database:** MongoDB.
  - **API:** Leaflet with OpenStreetMap

# Tasks:

1. **Design Database Schema**

   - To be determined.
   - MongoDB?

2. **Source Data**

   - OpenStreetMap.
   - User submitted data.

3. **User Flows**

   - User can log in or create a profile.
   - User will be able to view or create an itinerary. This can be done either from scratch with input from the user, or the user can submit data (e.g., confirmation emails) and the itinerary can be created/updated with that data.
   - User will be able to interact with a map to view locations, routes, and points of interest.
   - User will be able to share the itinerary with other users that they are traveling with.

4. **Set Up Backend and Database**

   - To be determined.

5. **Set Up Frontend**

   - Create a user-friendly interface using React.
   - Implement reusable UI components (e.g., forms, buttons, modals, maps).
   - Ensure components are responsive and accessible.

6. **User Authentication**

   - Want to create the ability to authenticate (login and sign up) as a user.

7. **Implement API Integration**

   - Integrate with external APIs (e.g., OpenStreetMap and Leaflet for map and map features).
   - Ensure proper handling of API responses and error management.

### Additional Features:

- Potentially enhance the web application in the future with the following:
  - Budget - Users can track expenses.
  - Currency conversion and translation - travel to other countries.
  - Live-Weather Updates
  - Custom recommendations based on user preferences.
  - Offline access to itinerary.
  - Enhanced social features to include - experiences, reviews, tips and photos.
