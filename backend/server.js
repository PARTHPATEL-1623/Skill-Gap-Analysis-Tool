
const express = require('express');
const cors = require('cors');
const skillGapRoutes = require('./routes/skillGapRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', skillGapRoutes);

// Health Check
app.get('/', (req, res) => {
    res.send('Skill Gap Analysis API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
