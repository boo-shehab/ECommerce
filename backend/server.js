const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv')
const connectDB = require('./config/db')
app.use(express.json())
app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 3000
connectDB()

app.get('/', (req, res) => {
    res.send('WELCOME TO RABBIT API')
})
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
    
})