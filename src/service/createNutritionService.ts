import { CreateNutritionDto } from "../dto/create-nutrition.dto"
import {GoogleGenerativeAI} from '@google/generative-ai'

class CreateNutritionService{
    async execute ({name, weight, height, age, gender, objective, level}: CreateNutritionDto) {
      try {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY!)
        const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"})
        const response = await model.generateContent(`Em que ano o javascript foi criado`)

        if(response.response && response.response.candidates){
          const jsonText = response.response.candidates[0]?.content.parts[0].text as string
          return {data:jsonText}
        }

        return {ok:true}
      } catch (error) {
        console.log("🚀 ~ CreateNutritionService ~ execute ~ error:", error)
        throw new Error('Failed to create nutrition')
      }
    }
}

export {CreateNutritionService}