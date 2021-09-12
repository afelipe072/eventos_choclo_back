import express, {json} from 'express';
import morgan from 'morgan';
import cors from 'cors'
import pkg from '../package.json'

//import routes
import usuariosRoutes from './routes/usuarios';

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
            version: app.get('pkg').version  
        }
    );
});

app.use('/api/usuarios',usuariosRoutes);


export default app;