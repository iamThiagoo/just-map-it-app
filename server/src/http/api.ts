import express from 'express';
import promptRoutes from '../http/routes/prompt';

require('dotenv').config();
const app = express();
app.use(express.json());

app.use('/api', promptRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is is available on ports: ${PORT}`);
});
