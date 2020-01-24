const db = require('../../data/db-config.js')

module.exports = {
    getRecipesByIngredient
}

function getRecipesByIngredient(ingredient_id) {
    return db('recipe_ingredients as x')
        .where('x.ingredient_id', ingredient_id)
        .join('recipes as r', 'x.recipe_id', 'r.id')
        .join('ingredients as i', 'x.ingredient_id', 'i.id')
        .select('x.id', 'r.name as recipe_name', 'i.name as ingredient_name')
}