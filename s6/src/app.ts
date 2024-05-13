import {ciudadanoRouter } from './routes'
import server from 'express'

// Path: s6/src/app.ts

// Create an Express application
const app = server();

app.use(server.json());
app.use('/ciudadano', ciudadanoRouter);

// Start the Express server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
