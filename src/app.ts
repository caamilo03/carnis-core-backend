import express, {Application, Request, Response} from "express";
import cors from "cors";
import helmet from "helmet";

import userRoutes from "./routes/userRoutes";



const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello World!",
        status : "success",
        timeStamp: new Date().toISOString()
    });
});

app.use("/api/users", userRoutes);

export default app;