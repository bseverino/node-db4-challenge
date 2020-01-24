exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Linguine with Red Wine Sauce'},
        {id: 2, name: 'Korean Spinach Banchan'}
      ]);
    });
};
