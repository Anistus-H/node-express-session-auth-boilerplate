# NodeJS Express Backend Boilerplate with session based authentication using Passport

A boilerplate for building a Node.js backend with Express, session-based authentication using Passport.js, and PostgreSQL as the database. This project is designed to help you quickly set up a secure and scalable backend for your applications.

## Features
- **Session-based authentication** using `express-session` and `passport`.
- **Local strategy** for user authentication with email and password.
- **PostgreSQL** integration using Sequelize ORM.
- **User registration and login** endpoints.
- **Middleware for route protection**.
- **Environment variable configuration** using `dotenv`.
- **Error handling** and 404 route handling.
- **Modular structure** for scalability and maintainability.

## Project Structure
```
.
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
├── src/
│   ├── app.js            # Main application entry point
│   ├── config/
│   │   └── passport.js   # Passport configuration
│   ├── controllers/
│   │   └── authController.js # Authentication logic
│   ├── middleware/
│   │   └── authMiddleware.js # Middleware for route protection
│   ├── models/
│   │   ├── index.js      # Sequelize initialization
│   │   └── User.js       # User model definition
│   ├── routes/
│   │   └── authRoutes.js # Authentication routes
```

## Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn

## Getting Started

### 1. Clone the Repository
```bash
git clone git@github.com:Anistus-H/node-express-session-auth-boilerplate.git
cd node-express-session-auth-boilerplate
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and configure the following variables:

```properties
# Database configuration
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=5432

# Session secret
SESSION_SECRET=your_session_secret

# Server port
PORT=3000
```

### 4. Run the Application
Start the development server:
```bash
npm run dev
```

The server will run at `http://localhost:3000`.

## API Endpoints

### Authentication Routes
| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| POST   | `/api/auth/register` | Register a new user           |
| POST   | `/api/auth/login`    | Login with email and password |
| POST   | `/api/auth/logout`   | Logout the current user       |

### Protected Routes
| Method | Endpoint       | Description                        |
|--------|----------------|------------------------------------|
| GET    | `/auth`        | Test route for authenticated users |

## Technologies Used
- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Passport.js**: Authentication middleware.
- **Sequelize**: ORM for PostgreSQL.
- **bcryptjs**: Password hashing.
- **dotenv**: Environment variable management.
- **express-session**: Session management.

## Contributing
Contributions are welcome! Feel free to fork this repository and submit a pull request.

## License
This project is licensed under the MIT License.
