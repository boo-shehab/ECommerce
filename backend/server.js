const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require("./routes/userRoutes")
const app = express();
app.use(express.json())
app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 3000
connectDB()

app.get('/', (req, res) => {
    res.send('WELCOME TO RABBIT API')
})

// API Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
    
})