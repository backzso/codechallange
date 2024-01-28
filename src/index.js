const express = require('express');
const { connectToMongoDB } = require('./db/db');
const codeChallengeRoutes = require('./routes/codechallenge-route');

const app = express();
const port = 3000;

connectToMongoDB();

app.use('/api', codeChallengeRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
