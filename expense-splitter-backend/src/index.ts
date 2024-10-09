// import express from 'express'
// const app = express()
// app.use(express.json())
// const PORT = 300

// app.get('/ping', (_req, res) => {
//     console.log('someone pinged here')
//     res.send('pong')
// })

// app.listen(PORT, () => {
//     console.log(`Server running in http://localhost:${PORT}`)
// })

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import debtRouter from './routes/debtRoutes';
// import authRoutes from './routes/authRoutes';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
// app.use('/api/auth', authRoutes);
app.use('/api/debt', debtRouter );

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
