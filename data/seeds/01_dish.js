
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {name: 'pizza'},
        {name: 'taco'},
        {name: 'burito'}
      ]);
    });
};
