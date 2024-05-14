import mongoose from 'mongoose';

const ciudadanoSchema = new mongoose.Schema({
  
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  votaciones: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Votacion'
  }]

});


export const CiudadanoModel = mongoose.model('Ciudadano', ciudadanoSchema );


