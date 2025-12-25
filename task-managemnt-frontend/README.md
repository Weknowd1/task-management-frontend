This repository contains the frontend of the Task Management application.
The application is built using React (Vite) and provides user authentication and a dashboard to manage tasks.

*Prerequisites*

Before running the application locally, make sure the following are installed on your system:

Node.js (version 18 or above)

npm (comes with Node.js)

Backend server for this project should be running

Project Setup (Local)

*Follow the steps below to run the application on your local machine.*

Step 1: Clone the Repository

Clone the frontend repository from GitHub:

git clone https://github.com/Weknowd1/task-management-frontend.git

Navigate into the project directory:

cd task-management-frontend

Step 2: Install Dependencies

Install all required npm packages by running:

npm install

Step 3: Start the Development Server

Start the application in development mode:

npm run dev

Step 4: Open the Application in Browser

Once the server starts successfully, open your browser and go to:

http://localhost:5173

The frontend application should now be running.

Backend Connection

This frontend application communicates with a backend API for authentication and task management.

Please ensure that the backend server is running before trying to log in or manage tasks.

Features

User Signup and Login

Remember Me functionality

Protected Routes

Task Dashboard

Add, Edit, and Delete Tasks

Logout functionality

Notes

The application uses token-based authentication.

Login sessions are stored using localStorage or sessionStorage depending on the Remember Me option.

This project is intended for local development and assignment evaluation.

Author

Vinod
Task Management Application – Frontend

