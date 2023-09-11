const mongoose = require('mongoose');
const bus = require('./models/bus');
const database = 'Buslive'
mongoose.connect('mongodb+srv://UnifieldTech:UnifieldTech_23@Buslive.6wi1pcs.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: database
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  const isCollectionEmpty = await bus.countDocuments() === 0;

if (isCollectionEmpty) {
  const newBus = new bus({
    rota: 'Ônibus Teste',
  });

  try {
    const savedBus = await newBus.save();
    console.log('Bus saved:', savedBus);
  } catch (error) {
    console.error('Error saving bus:', error);
  }
  }else {
    console.log('A coleção já possui registros, não é necessário adicionar.');
  }
});

module.exports = db;