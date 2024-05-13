import {ciudadanoRouter, usuarioRouter } from './routes'
import server from 'express'
import path from 'path'

// Path: s6/src/app.ts

// Create an Express application
const app = server();

app.use(server.json());
app.use( server.urlencoded({ extended: true }) ); // x-www-form-urlencoded

app.use('/joancema', server.static( path.join(__dirname,`../public`) ) );
app.use('/ciudadano', ciudadanoRouter);
app.use('/usuario', usuarioRouter);

// Start the Express server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
