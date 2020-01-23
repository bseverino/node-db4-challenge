exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'linguini', unit_type: 'gram'},
        {id: 2, name: 'garlic', unit_type: 'clove'},
        {id: 3, name: 'olive oil', unit_type: 'tablespoon'},
        {id: 4, name: 'red wine', unit_type: 'cup'},
        {id: 5, name: 'spinach', unit_type: 'gram'},
        {id: 6, name: 'green onion', unit_type: 'cup'},
        {id: 7, name: 'soy sauce', unit_type: 'tablespoon'},
        {id: 8, name: 'sesame oil', unit_type: 'tablespoon'},
        {id: 9, name: 'toasted sesame seeds', unit_type: 'tablespoon'},
        {id: 10, name: 'salt', unit_type: 'teaspoon'},
        {id: 11, name: 'pepper', unit_type: 'teaspoon'}
      ]);
    });
};
