import server from 'express';
import { ciudadanoRouter,preguntaRouter } from './routes'



const app = server();

app.use(server.json());
app.use(server.urlencoded({ extended: true }));

//http://localhost:3000/ciudadano/
app.use('/ciudadano', ciudadanoRouter);
app.use('/pregunta', preguntaRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})





