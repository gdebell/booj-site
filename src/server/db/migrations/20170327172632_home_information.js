
exports.up = function(knex, Promise) {
  return knex.schema.createTable('home_listings', function(table) {
    table.increments('id');
    table.double('price').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.text('description').notNullable();
    table.string('image_url').notNullable();
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('home_listings');
};
