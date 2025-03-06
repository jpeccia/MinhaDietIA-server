import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from "fastify"
import { CreateNutritionController } from "./controllers/CreateNutritionController"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
        let responseText = "```json\n{\n  \"nome\": \"Joao\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 21,\n  \"altura\": 1.93,\n  \"peso\": 83,\n  \"calorias\": 3500,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"8:00\",\n      \"nome\": \"Cafe da Manha\",\n      \"alimentos\": [\n        \"6 ovos mexidos\",\n        \"1 xicara de aveia\",\n        \"1 banana\",\n        \"30g de pasta de amendoim\"\n      ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"200g de peito de frango grelhado\",\n        \"2 xicaras de arroz integral\",\n        \"1 xicara de brocolis cozido\",\n        \"1 colher de azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"17:00\",\n      \"nome\": \"Pre Treino\",\n      \"alimentos\": [\n        \"200g de batata doce cozida\",\n        \"150g de carne magra moida\"\n      ]\n    },\n    {\n      \"horario\": \"20:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"200g de salmao assado\",\n        \"1 xicara de quinoa\",\n        \"Salada verde a vontade (alface, tomate, pepino)\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n        \"Creatina\",\n        \"Whey Protein\"\n  ]\n}\n```"

        try {
            let jsonString = responseText.replace(/```\w*\n/g, ''). replace(/\n```/g, '').trim();

            let jsonObject = JSON.parse(jsonString)
            return reply.send({data: jsonObject})
        } catch (error) {
            
        }
        reply.send({ ok: true})
    })

    fastify.post("/api/dieta", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })
}