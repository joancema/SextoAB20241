import mongoose from 'mongoose';
const { Schema } = mongoose;

const preguntaSchema = new Schema({
  texto: String,
});

const Pregunta = mongoose.model('Pregunta', preguntaSchema);

export default Pregunta;