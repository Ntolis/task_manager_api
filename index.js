import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello. Its a todoList!');
})

app.listen(PORT, () => {
    console.log(`server work on - http://localhost:${PORT}`);
})