import { gql } from "apollo-server-core";

export const typeDefs = gql`
    type Recipe {
        name: String
        description: String
        createdAt: String
    }

    input RecipeInput {
        name: String
        description: String
    }

    type Query {
        getRecipe(id: ID!): Recipe!
        getRecipes: [Recipe]
    }apol

    type Mutation {
        createRecipe(recipeInput: RecipeInput): Recipe!
        deleteRecipe(id: ID!): Boolean
        editRecipe(id: ID!, recipeInput: RecipeInput): Boolean
    }
`;
