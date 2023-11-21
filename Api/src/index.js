import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());

server.listen(process.env.PORT,
              () =>  console.log(`Api on na porta ${process.env.PORT}`));
              