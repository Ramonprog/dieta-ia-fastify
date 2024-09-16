import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/teste', (request: FastifyRequest, response: FastifyReply) =>{
    console.log('deu bom')

    response.send({ok: true}) 
  })
}
