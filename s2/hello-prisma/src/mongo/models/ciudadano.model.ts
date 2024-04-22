import mongoose from 'mongoose';

const ciudadanoSchema = new mongoose.Schema({
  
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  direccion: {
    type: String,
  },
  telefono: {
    type: String,
  },
  respuestas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Respuesta'
  }]

});


export const CiudadanoModel = mongoose.model('Ciudadano', ciudadanoSchema );


