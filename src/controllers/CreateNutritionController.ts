import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionService } from "../services/CreateNutritionservice";

export interface DataProps{
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
    objective: string;
    level: string;
    foodPreference: string;
    numberMeals: string;
    foodRestrictions: string;
}

class CreateNutritionController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, weight, height, age, gender, objective, level, foodPreference, numberMeals, foodRestrictions } = request.body as DataProps;
        const createNutrition = new CreateNutritionService();

        const nutrition = await createNutrition.execute(name, 
            weight, 
            height, 
            age, 
            gender, 
            objective, 
            level,
            foodPreference, 
            numberMeals, 
            foodRestrictions
        );
        reply.send(nutrition)
    }
}

export { CreateNutritionController };