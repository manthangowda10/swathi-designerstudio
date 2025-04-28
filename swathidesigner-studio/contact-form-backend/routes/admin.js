const express = require ('express');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken');
const { Pool } = require('pg');
const {verifyToken} = require('../middleware/authMiddleware');

const router = express.Router();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL});

    router.post('/signup',async (req, res) => {
        const { username, password } = req.body;
        if(!username || !password) {
            return res.status(400).json({message: 'Username and password are required'});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        try {
            const result = await pool.query('INSERT INTO admins(username,password) VALUES($1,$2) RETURNING id',[username, hashedPassword]);
            res.status(201).json({message: 'User created successfully', id: result.rows[0].id});
        } catch (error) {
            console.error(error);
            res.status(500).json({message:'Signup failed'});
        }
    })

    router.post('/login', async(req, res) => {
        const { username, password } = req.body;
        const result = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);
        const admin = result.rows[0];

        if(!admin){
            return res.status(401).json({message:'Invalid credentials'})
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);
        if(!passwordMatch){
            return res.status(401).json({message:'Invalid credentials'})    
        }

        const token = jwt.sign({ id : admin.id }, process.env.JWT_secret, {expiresIn:'1h'});
        res.status(200).json({message:'Login successful', token});
    })

    router.get('/view-data', verifyToken, async(req,res) => {
        try {
            const result = await pool.query('SELECT * FROM contacts ORDER BY id DESC');
            res.status(200).json({data: result.rows});
        } catch (error) {
            res.status(500).json({message:'Error fetching data'});
        }
    })


    module.exports = router