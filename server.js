// // Load environment variables
// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// // Initialize Express app
// const app = express();   
// app.use(cors());
// app.use(bodyParser.json());  // To parse JSON bodies from incoming requests

// // MongoDB URI from environment variables
// const MONGODB_URI = process.env.MONGODB_URI;

// // Connect to MongoDB (without deprecated options)
// mongoose.connect(MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB Atlas'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Create a schema for the booking form with realDate and gmtDate
// const bookingSchema = new mongoose.Schema({
//   name: String,
//   telephone: String,
//   country: String,
//   members: Number,
//   address: String,
//   countryCode: String,
//   realDate: {
//     type: Date,
//     default: () => new Date(), // Set default to the current local date/time
//   },
//   gmtDate: {
//     type: Date,
//     default: () => new Date().toISOString(), // Set default to the current date/time in GMT (ISO format)
//   },
// });

// // Create a model for the booking data
// const Booking = mongoose.model('Booking', bookingSchema);

// // API endpoint to handle form submission (POST request)
// app.post('/api/bookings', async (req, res) => {
//   const { name, telephone, country, members, address, countryCode } = req.body;

//   // Log each field with its name when the form is submitted
//   console.log('Received Booking Data:');
//   console.log(`name: ${name}`);
//   console.log(`telephone: ${telephone}`);
//   console.log(`country: ${country}`);
//   console.log(`members: ${members}`);
//   console.log(`address: ${address}`);
//   console.log(`countryCode: ${countryCode}`);

//   // Create a new booking entry
//   const newBooking = new Booking({
//     name,
//     telephone,
//     country,
//     members,
//     address,
//     countryCode,
//   });

//   try {
//     // Save the booking data to MongoDB
//     await newBooking.save();
//     res.status(200).json({ message: 'Booking confirmed', booking: newBooking });
//   } catch (error) {
//     res.status(500).json({ error: 'Error saving booking' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
