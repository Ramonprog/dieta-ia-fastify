import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateNutritionService } from '../service/createNutritionService'
import { CreateNutritionDto } from '../dto/create-nutrition.dto'

class CreateNutritionController {
  async createNutrition(request: FastifyRequest, response: FastifyReply) {
    const { name, weight, height, age, gender, objective, level } = request.body as CreateNutritionDto

    const service = new CreateNutritionService()
    const result = await service.execute({ name, weight, height, age, gender, objective, level })	
    response.send(result)
  }
}

export { CreateNutritionController }