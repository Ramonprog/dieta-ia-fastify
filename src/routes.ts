import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { CreateNutritionController } from "./controller/createNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/teste', (request: FastifyRequest, response: FastifyReply) =>{
    console.log('deu bom')

    response.send({ok: true}) 
  })

  fastify.post('/nutrition', async (request: FastifyRequest, response: FastifyReply)=>{
    return new CreateNutritionController().createNutrition(request, response)
  })
}
