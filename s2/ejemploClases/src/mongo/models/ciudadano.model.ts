import mongoose from 'mongoose';
const { Schema } = mongoose;

const ciudadanoSchema = new Schema({
  nombre: String,
});

const Ciudadano = mongoose.model('Ciudadano', ciudadanoSchema);

export default Ciudadano;