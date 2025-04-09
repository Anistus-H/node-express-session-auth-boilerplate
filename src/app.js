import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './models/index.js';
import session from 'express-session'; // Import express-session
import passport from 'passport'; // Import passport
import authRoutes from './routes/authRoutes.js';

// Initialize the Express app
const app = express();

// Load environment variables (if using dotenv)
dotenv.config();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan('dev')); // Log HTTP requests
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(express.static(path.join(process.cwd(), 'public'))); // Serve static files

// Session middleware
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Import and configure passport strategies
import './config/passport.js';

// Routes
app.use('/api/auth', authRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the Backend boilerplate!');
});

// Test Route
//----------------------------------------------------------------------------
import { ensureAuthenticated } from './middleware/authMiddleware.js';
app.get('/auth', ensureAuthenticated ,(req, res) => {
    res.send('Authenticated!!');
});
// End of Test Route----------------------------------------------------------

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong', error: err.message || 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await sequelize.sync({ force: false }); // Set to true for resetting DB
        console.log('Database synchronized');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Error starting the server:', err);
    }
};

startServer();