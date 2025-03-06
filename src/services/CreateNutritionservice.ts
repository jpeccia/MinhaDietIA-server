import { DataProps } from "../controllers/CreateNutritionController";
class CreateNutritionService {
    async execute( name, weight, height, age, gender, objective, level){
        console.log("teste")

        return { message: "funfou service"}
    }
}

export { CreateNutritionService };