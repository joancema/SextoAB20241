import mongoose from 'mongoose';
const { Schema } = mongoose;

const respuestaSchema = new Schema({
  respuesta: Boolean,
    pregunta: { type: Schema.Types.ObjectId, ref: 'Pregunta' },
    ciudadano: { type: Schema.Types.ObjectId, ref: 'Ciudadano' },
});

const Respuesta = mongoose.model('Respuesta', respuestaSchema);

export default Respuesta;