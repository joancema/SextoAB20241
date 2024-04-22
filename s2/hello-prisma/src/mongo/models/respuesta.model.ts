import mongoose from 'mongoose';

const respuestaSchema = new mongoose.Schema({
  respuesta: {
    type: Boolean,
    default: true,
  },
  ciudadano: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ciudadano'
  },
  pregunta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pregunta'
  },
  

});


export const RespuestaModel = mongoose.model('Respuesta', respuestaSchema );


