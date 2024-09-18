import dotenv from 'dotenv';
dotenv.config()
import express from 'express';

const app = express()

app.use(express.json())

// Routes
//app.use('/auth', authRoutes)
//app.use('/users', usersRoutes)

export default app