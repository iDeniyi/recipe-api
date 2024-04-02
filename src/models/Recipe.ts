import { model, Schema } from "mongoose";

const recipeSchema = new Schema({
    name: String,
    description: String,
    createdAt: String,
});

export default model("Recipe", recipeSchema);
