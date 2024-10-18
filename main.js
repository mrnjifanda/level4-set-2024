const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courseRoutes');
const indexRoutes = require('./routes/index.route');
const { logger, notFound, errorHandler } = require('./middlewares/index.middleware'); // Import middleware

mongoose.connect('mongodb://localhost:27017/test1-sep-2024', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    const PORT = 3000;
    const app = express();
    
    app.use(logger);

    app.use(express.json());

    app.use('/api', indexRoutes);

    app.use('/api/courses', courseRoutes);

    app.use(notFound);

    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log('Application listening on http://localhost:' + PORT);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
});
