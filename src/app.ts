import "express-async-errors";
import express, {Request, Response,NextFunction} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import carsRouter from "./routers/carsRouter"

const app = express();

app.use(morgan("tiny")); //adicionando ao express o módulo de LOG, para ver o que está chegando até o backend

app.use(cors()); //Módulo para fazer a comunicação do back-end com o front-end

app.use(helmet()); //Módulo para proteger um pouco mais o nosso backend (caso estude a fundo sobre esse módulo, consigo deixar o backend mais seguro)

app.use(express.json()); //essa config do módulo serve para o back-end conseguir entender o JSON

app.use("/cars", carsRouter)

// app.use((req: Request, res: Response, next: NextFunction)=>{
    //res.send('Backend rodando na porta 3000')
// }) //módulo de teste para ver se o backend está funcionando

app.use((error: Error, req: Request, res: Response, next: NextFunction) => { 
    res.status(500).send(error.message)
}) //tratamento de erro geral


export default app;
