exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          id: 1,
          recipe_id: 1,
          step_number: 1,
          instruction: 'Put the pasta on the boil, cook in well salted water until al dente.'
        },
        {
          id: 2,
          recipe_id: 1,
          step_number: 2,
          instruction: 'While the water is coming to a boil, crush and saute the garlic cloves in olive oil in a large skillet. When the garlic cloves are just beginning to brown, remove them. Then add the red wine. Let the wine reduce until it is quite syrupy.'
        },
        {
          id: 3,
          recipe_id: 1,
          step_number: 3,
          instruction: 'When the pasta is done, drain it (but not too thoroughly) and add it to the skillet with the wine reduction. Mix the pasta and wine reduction well, and let the pasta absorb the wine almost entirely. Salt and pepper to taste.'
        },
        {
          id: 4,
          recipe_id: 2,
          step_number: 1,
          instruction: 'Mix minced garlic, green onion, soy sauce, and sesame oil in a large bowl.'
        },
        {
          id: 5,
          recipe_id: 2,
          step_number: 2,
          instruction: 'In a medium pot of boiling water, add salt and blanch spinach for 30 seconds. Drain the cooked spinach and rinse it in cold water 3 times, and squeeze it gently to get the water out.'
        },
        {
          id: 6,
          recipe_id: 2,
          step_number: 3,
          instruction: 'Cut the spinach a few times, place the spinach into the sauce bowl, and mix by hand.'
        },
        {
          id: 7,
          recipe_id: 2,
          step_number: 4,
          instruction: 'Transfer the spinach onto a serving plate and sprinkle toasted sesame seeds.'
        }
      ]);
    });
};
