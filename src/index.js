import app from "./app.js"; //Equivale al codigo que esta en app
import './database.js';
import { PORT } from "./config.js";
import 'regenerator-runtime/runtime';


app.listen(PORT)
console.log('Servidor en puerto', PORT)