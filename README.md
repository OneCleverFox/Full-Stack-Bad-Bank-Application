Certainly! Here's the extended README.md file with Docker instructions in English:

**README.md**

# M.I.T. Fullstack Application

## Project Title

M.I.T. Fullstack-Application

## Description/Motivation

The M.I.T. Fullstack Application is a fully functional React-based web application that serves as the frontend for the Massachusetts Institute of Technology (M.I.T.) banking application. This project was developed as part of a course to showcase skills acquired in full-stack development.

Our aim was to create a user-friendly application that enables users to perform banking transactions, manage their account information, and leverage the benefits of modern web technologies.

## Installation Guidelines

To run the M.I.T. Fullstack Application on your local machine, follow these steps:

1. **Install Docker**: Ensure that you have Docker installed on your system.

2. **Create and Run Docker Container**:

   Use the following commands to run the application in a Docker container:

   ```bash
   # Build Docker image (execute in the project directory)
   docker build -t mit-fullstack-app .

   # Run Docker container and start the application
   docker run -p 3000:3000 mit-fullstack-app
   ```

   The application should now be running at `http://localhost:3000`.

## Screenshots



## Technology Used

- React: A JavaScript library for building user interfaces.
- Firebase: For user authentication.
- MongoDB: As a database with the Studio 3T interface.
- Express: A web framework for Node.js.
- Node.js: A server-side runtime environment for JavaScript.
- Docker: A containerization platform for deploying and running applications in containers.

## Features

- **Login:** Users can log in using their registered email and password. The application validates the login credentials and provides appropriate feedback for successful login or invalid credentials.

- **Registration:** New users can register by providing their name, email, password, and password confirmation. The application verifies the uniqueness of the email before creating a new user account.

- **Profile View:** After successful login, users can view their profile information, including the user's profile picture (avatar), name, email address, and current account balance.

- **Transactions:** Users can perform various types of transactions, such as deposits and withdrawals. The application keeps track of the user's transaction history and displays it on the profile screen.

- **Profile Update:** Logged-in users can update their profile information, including their name, email address, password, and profile picture (avatar).

## License

The M.I.T. Fullstack Application is open source and available under the [MIT License](LICENSE). You are welcome to use, modify, and distribute the code according to the terms of the license.

## Author

This application was developed by OneCleverFox.

## Acknowledgments

Special thanks to the Massachusetts Institute of Technology for inspiring this Fullstack application.

Let's get started! We hope you can successfully use the M.I.T. Fullstack Application and look forward to your feedback and contributions.