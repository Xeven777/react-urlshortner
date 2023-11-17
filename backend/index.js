const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');   // to allow cross-origin requests

const app = express();
app.use(cors({
    origin: 'https://simplifyy.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST',
    credentials: true,
}));
// Connect to database
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));