import app from './src/express.mjs'
import { connectDB } from './src/db/mongoose.mjs';

connectDB();

app()