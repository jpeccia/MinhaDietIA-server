import { DataProps } from "../controllers/CreateNutritionController";
class CreateNutritionService {
    async execute( name, age, gender, height, level, object, weight){
        console.log("teste")

        return { message: "funfou service"}
    }
}

export { CreateNutritionService };