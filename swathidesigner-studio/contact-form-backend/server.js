const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();

const app = express();
const port = process.env.port || 5000;

const pool = new Pool({
    connectionString : process.env.DATABASE_URL,
});

const adminRoutes = require('./routes/admin');

app.use(express.json());
app.use(cors());
app.use('/admin', adminRoutes);

app.post('/submitForm', async (req, res) => {
    const { name, phone, customization } = req.body;
  
    // Trim inputs to avoid unwanted spaces
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedCustomization = customization.trim();
  
    if (!trimmedName || !trimmedPhone || !trimmedCustomization) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    // Validate name (only letters and spaces allowed)
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(trimmedName)) {
      return res.status(400).json({ message: "Name can only contain letters and spaces." });
    }
  
    // Validate phone number format
    const phonePattern = /^\+91-\d{10}$/;
    if (!phonePattern.test(trimmedPhone)) {
      return res.status(400).json({ message: "Please enter a valid phone number in the format +91-xxxxxxxxxx." });
    }
  
    // Optional: Validate customization (e.g., minimum length)
    if (trimmedCustomization.length < 5) {
      return res.status(400).json({ message: "Please provide a more detailed customization request." });
    }
  
    try {
      const result = await pool.query(
        'INSERT INTO contacts (name, phone_number, customization_request) VALUES ($1, $2, $3) RETURNING *',
        [trimmedName, trimmedPhone, trimmedCustomization]
      );
      res.status(201).json({ message: 'Form submitted successfully', data: result.rows[0] });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Error submitting form. Please try again later.' });
    }
  });
  

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})