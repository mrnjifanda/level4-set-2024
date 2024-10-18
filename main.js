const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/test1-sep-2024")
    .then((connection) => {
        const app = express();
        app.use(express.json());

        // Import and use course routes
        const courseRoutes = require("./routes/course.route");
        app.use('/api/courses', courseRoutes);

        // Start the server
        app.listen(3000, () => {
            console.log("Application listening on http://localhost:3000");
        });
        
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
    });

