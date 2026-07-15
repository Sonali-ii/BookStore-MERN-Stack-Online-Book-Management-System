const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const connectDB = require('./config/connect');
const adminRoutes = require("./routes/adminRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");


const app = express();
const PORT = 4000;

dotenv.config();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/', adminRoutes);
app.use('/', sellerRoutes);
app.use('/', userRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
