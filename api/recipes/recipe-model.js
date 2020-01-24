const db = require('../../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients as x')
        .where('x.recipe_id', recipe_id)
        .join('ingredients as i', 'x.ingredient_id', 'i.id')
        .select('x.id', 'i.name as ingredient_name', 'x.ingredient_count', 'i.unit_type')
}

function getInstructions(recipe_id) {
    return db('instructions as i')
        .where('i.recipe_id', recipe_id)
        .join('recipes as r', 'i.recipe_id', 'r.id')
        .select('i.id', 'r.name as recipe_name', 'i.step_number', 'i.instruction')
        .orderBy('i.step_number')
}