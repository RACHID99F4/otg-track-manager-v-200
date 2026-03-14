import express, { Express } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app: Express = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date(),
    environment: process.env.NODE_ENV
  });
});

// Config endpoint
app.get('/api/config', (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
    apiUrl: process.env.API_URL || 'https://api.example.com',
    databaseConnected: true,
    timestamp: new Date()
  });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working',
    method: 'GET'
  });
});

export default app;