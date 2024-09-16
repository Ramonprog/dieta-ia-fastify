import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { CreateNutritionController } from "./controller/createNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/teste', (request: FastifyRequest, response: FastifyReply) =>{
    let res = "```json\n{\n  \"nome\": \"Alison Ramon\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 29,\n  \"altura\": 1.72,\n  \"peso\": 82,\n  \"objetivo\": \"Perda de peso\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da manhã\",\n      \"alimentos\": [\n        \"1 fatia de pão integral\",\n        \"2 ovos mexidos com 1 colher de sopa de queijo cottage\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:30\",\n      \"nome\": \"Lanche da manhã\",\n      \"alimentos\": [\n        \"1 iogurte grego natural com 1 colher de sopa de granola\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"Salada verde com tomate e cenoura ralada\",\n        \"1 colher de sopa de azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"15:30\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 maçã\",\n        \"1 punhado de castanhas\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 xícara de brócolis cozido no vapor\",\n        \"1 batata doce pequena cozida\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n        \"alimentos\": [\n        \"1 copo de leite de amêndoas\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Proteína do soro do leite\",\n    \"Creatina\"\n  ],\n  \"macros\": {\n    \"proteinas\": \"1.2g por kg de peso corporal\",\n    \"carboidratos\": \"2g por kg de peso corporal\",\n    \"gorduras\": \"0.8g por kg de peso corporal\"\n  }\n}\n```"

    try {
      let jsonString = res.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim()
      response.send(JSON.parse(jsonString))
    } catch (error) {
      console.log("🚀 ~ fastify.get ~ error:", error)
    }

    response.send({ok: true}) 
  })

  fastify.post('/nutrition', async (request: FastifyRequest, response: FastifyReply)=>{
    return new CreateNutritionController().createNutrition(request, response)
  })
}
