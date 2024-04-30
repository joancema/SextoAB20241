import server from 'express'
import { ciudadano as ciudadanoRouter, pregunta as preguntaRouter } from './routes'


const app = server()
app.use('/ciudadano', ciudadanoRouter)
app.use('/pregunta', preguntaRouter)


app.listen(3000, () => {
    console.log('Server running on port 3000')
})

// define various routes


