import express from 'express';
import cors from 'cors';
// ... (imports de rotas que faremos amanhã)

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
    res.send('Barbearia API rodando! Base configurada.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});