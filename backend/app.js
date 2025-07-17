// const dotenv = require('dotenv');
// dotenv.config();
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const cookieParser = require('cookie-parser');
// const connectToDb = require('./db/db');
// const userRoutes = require('./routes/user.routes');
// const captainRoutes = require('./routes/captain.routes');
// // const mapsRoutes = require('./routes/maps.routes');
// // const rideRoutes = require('./routes/ride.routes');

// connectToDb();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());



// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.use('/users', userRoutes);
// app.use('/captains', captainRoutes);
// // app.use('/maps', mapsRoutes);
// // app.use('/rides', rideRoutes);




// module.exports = app;



const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
// const mapsRoutes = require('./routes/maps.routes');
// const rideRoutes = require('./routes/ride.routes');

const app = express();
connectToDb();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
// app.use('/maps', mapsRoutes);
// app.use('/rides', rideRoutes);

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

module.exports = app;
