import express from "express";
import indexRoutes from './routes/indexRoutes'
import clienteRoutes from './routes/ClienteRoutes'
import exphb from "express-handlebars";
import path from 'path'; //modulo de node
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphb({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));

//rutas
app.use(indexRoutes);
app.use(clienteRoutes);

//archivos estaticos
app.use(express.static(path.join(__dirname, "frontend")));

export default app; //se exporta el objeto app
