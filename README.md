
# Advanced Authentication System

## Project Description
An authentication system built with Node.js and Express, featuring user login, signup, and protected routes. It includes role-based access control for students and admins, ensuring secure and personalized access to different parts of the application.

## Frontend Integration
You can integrate any frontend with this backend. If you need a reference, you can use the frontend from [StudyNotion](https://github.com/harshmahalle/StudyNotion.git).

## Backend Setup

### Prerequisites
- Node.js
- MongoDB (use MongoDB Compass for data interaction)
- Postman (for testing controllers and routes)

### Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/harshmahalle/Auth-App---Backend.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd Auth-App---Backend
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```

### Running the Backend
1. **Start the Backend Server**
   ```bash
   node index.js
   ```
   The backend server will run locally.

### Database Interaction
- Use MongoDB Compass to interact with the MongoDB database.

### Testing
- Use Postman to test the controllers and routes.

## Hosting the Application
To run the application globally, you can use a hosting service like Heroku or Vercel. Below are the basic steps to deploy on Heroku:

### Deploying on Heroku
1. **Login to Heroku**
   ```bash
   heroku login
   ```
2. **Create a New Heroku App**
   ```bash
   heroku create
   ```
3. **Push the Code to Heroku**
   ```bash
   git push heroku main
   ```
4. **Set up MongoDB on Heroku**
   - Add MongoDB as an add-on to your Heroku app.
   - Configure your app to use the MongoDB URI provided by Heroku.

Your app will now be hosted globally and accessible via the URL provided by Heroku.
