import server from 'express'
import { ciudadanoRouter, usuarioRouter } from './routes'


const app = server()

app.use(server.json())


app.use('/ciudadano', ciudadanoRouter)
app.use('/usuario', usuarioRouter)


app.listen(3000, () => {
    console.log('Server on port 3000')
})