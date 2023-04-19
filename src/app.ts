import express from "express";
import { router } from "./Router";
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(router)

app.use(cors());

app.listen(4444, () => console.log('server is roning on port 4444'))