import express, {json} from 'express';
import morgan from 'morgan';
import cors from 'cors'
import pkg from '../package.json'

//import routes
import usuariosRoutes from './routes/usuarios';

import authRoutes from './routes/auth.routes'

import eventosRoutes from './routes/eventos'

import comprasRoutes from './routes/compras'

const app = express();

app.set('pkg',pkg);

//middleware
app.use(morgan('dev'));
app.use(json());
app.use(cors());


//routes
app.get('/',(req,res)=>{
    res.json(
        {
            author: app.get('pkg').author,
            name: app.get('pkg').name,
            description: app.get('pkg').description,
            version: app.get('pkg').version  
        }
    );
});

app.use('/api/usuarios',usuariosRoutes);     //usuarios
app.use('/api/auth',authRoutes)             //inicio de sesión y registro
app.use('/api/eventos',eventosRoutes)       //eventos
app.use('/api/compras',comprasRoutes)       //compras

export default app;