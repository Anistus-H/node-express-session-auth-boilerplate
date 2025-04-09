import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const login = (req, res) => {
    res.status(200).json({ message: 'Logged in successfully', user: req.user });
};

export const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error('Error during logout:', err);
            return res.status(500).json({ message: 'Error during logout', error: err.message });
        }

        // Destroy the session after logout
        req.session.destroy((sessionErr) => {
            if (sessionErr) {
                console.error('Error destroying session:', sessionErr);
                return res.status(500).json({ message: 'Error destroying session', error: sessionErr.message });
            }

            res.clearCookie('connect.sid'); // Clear the session cookie
            return res.status(200).json({ message: 'Logged out successfully' });
        });
    });
};
