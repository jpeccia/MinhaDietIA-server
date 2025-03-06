import Fastify from "fastify";
import cors from "cors";
import dotenv from "dotenv";

const app = Fastify({ logger: true})
dotenv.config();

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})

const start = async () => {

}

start();