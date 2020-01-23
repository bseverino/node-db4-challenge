exports.up = function(knex) {
  return knex.schema

    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('name', 128)
            .notNullable()
            .index()
    })

    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('name', 128)
            .notNullable()
            .index()
        tbl.text('unit_type', 128)
            .notNullable()
    })

    .createTable('recipe_ingredients', tbl => {
        tbl.increments()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.decimal('ingredient_count', 'NULL')
            .notNullable()
    })

    .createTable('instructions', tbl => {
        tbl.increments()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('step_number')
            .unsigned()
            .notNullable()
        tbl.text('instruction')
            .notNullable()
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
