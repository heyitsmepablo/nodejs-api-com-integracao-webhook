import  express  from "express";
import router from "./routes/routes.js";

const app = express()
app.use(express.json());
const port = 3000;

app.use('/',router)


app.listen(port,()=>{
    console.log("API disponivel em: http://localhost:3000")
    console.log("Para utilizar a rota que escuta webhooks use: http://localhost:3000/webhook")
})