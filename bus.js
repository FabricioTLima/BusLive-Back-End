const express = require('express');
const router = express.Router();
const Bus = require('./models/bus');

// Rota para buscar todos os ônibus
router.get('/buses', async (req, res) => {
  try {
    const buses = await Bus.find();
    console.log('Bus:', buses);
    res.json(buses);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/buses', async (req, res) => {
  try {
    const { rota } = req.body;

    const newBus = new Bus({
      rota,
    });

    const savedBus = await newBus.save();
    res.status(201).json(savedBus);
  } catch (error) {
    console.error('Error adding bus:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/buses/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const removedBus = await Bus.findByIdAndRemove(id);
    if (!removedBus) {
      return res.status(404).json({ message: 'Bus not found' });
    }

    res.json({ message: 'Bus removed successfully' });
  } catch (error) {
    console.error('Error removing bus:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;