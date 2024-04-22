import mongoose from 'mongoose';

const preguntaSchema = new mongoose.Schema({
  
  texto: {
    type: String,
    required: true,
  },
});


export const PreguntaModel = mongoose.model('Pregunta', preguntaSchema );


