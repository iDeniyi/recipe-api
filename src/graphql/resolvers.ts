import Recipe from "../models/Recipe";

interface RecipeInput {
    name: string;
    description: string;
}

export const resolvers = {
    Query: {
        async getRecipe(_: any, { id }: { id: string }) {
            return await Recipe.findById(id);
        },
        async getRecipes(_: any) {
            return await Recipe.find();
        },
    },
    Mutation: {
        async createRecipe(
            _: any,
            { recipeInput }: { recipeInput: RecipeInput }
        ) {
            const createdRecipe = new Recipe({
                name: recipeInput.name,
                description: recipeInput.description,
                createdAt: new Date().toISOString(),
            });
            const res = await createdRecipe.save();
            return res;
        },

        async deleteRecipe(_: any, { id }: { id: string }) {
            const wasDeleted = (await Recipe.deleteOne({ _id: id }))
                .deletedCount;
            return wasDeleted;
        },
        async editRecipe(
            _: any,
            { id, recipeInput }: { id: string; recipeInput: RecipeInput }
        ) {
            const wasEdited = (
                await Recipe.updateOne(
                    { _id: id },
                    {
                        name: recipeInput.name,
                        description: recipeInput.description,
                    }
                )
            ).modifiedCount;
            return wasEdited;
        },
    },
};
