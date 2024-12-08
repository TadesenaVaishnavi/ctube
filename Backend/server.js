const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');// Add CORS support
const path = require('path');

const userRoutes = require('../Backend/routes/userRoutes');
const videoRoutes = require('../Backend/routes/videoRoutes');
const channelRoutes = require('../Backend/routes/channelRoutes');
const likeRoutes = require('../Backend/routes/likeRoutes');
const subscriptionRoutes = require('../Backend/routes/subscriptionRoutes');
const playlistRoutes = require('../Backend/routes/playlistRoutes');
// Add other routes as needed

const app = express();
const port = process.env.PORT || 3000; // '0' lets the system assign a free port
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/ctube'; // MongoDB URI from environment

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// MongoDB Connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1); // Exit the process if DB connection fails
});

app.use(express.static(path.join(__dirname, 'Frontend')));

// Redirect root path to signup page in 'Frontend'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend', 'signup.html'));
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/channel', channelRoutes);
app.use('/api/like', likeRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/playlist', playlistRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
