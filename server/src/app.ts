import express from 'express';
import cors, { CorsOptions } from 'cors';
import movieRouter from './routes/movie.route';

const cors_options : CorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}

const app = express();
app.use(express.json());
app.use(cors(cors_options));

app.use('/movies', movieRouter)

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
})

export default app;