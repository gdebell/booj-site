
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('home_listings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('home_listings').insert({
          price: 775000,
          city: '5561 W 50th Ave Denver',
          state: 'CO',
          description:'3 beds 3 baths 2,588 sqft',
          image_url:'../css/images/house5561.jpg'
        }),
        knex('home_listings').insert({
          price:1795000,
          city:'151 S Jasmine St Denver',
          state:'CO',
          description:'4 beds 4 baths 6,000 sqft',
          image_url:'../css/images/house151.jpg'
        }),
        knex('home_listings').insert({
          price:1150000,
          city:'1726 S Humboldt St Denver',
          state:'CO',
          description:'5 beds 4 baths 4,070 sqft',
          image_url:'../css/images/house1726size.jpg'
        }),
        knex('home_listings').insert({
          price:3750000,
          city:'15 S Dexter St Denver',
          state:'CO',
          description:'6 beds 8 baths 9,101 sqft',
          image_url:'../css/images/house15.jpg'
        }),
        knex('home_listings').insert({
          price:1395000,
          city:'333 S Monroe St STE 509 Denver',
          state:'CO',
          description:'3 beds 3 baths 2,461 sqft',
          image_url:'../css/images/house333.jpg'
        }),
        knex('home_listings').insert({
          price:2300000,
          city:'865 S Cove Way Denver',
          state:'CO',
          description:'4 beds 6 baths 5,989 sqft',
          image_url:'../css/images/house865.jpg'
        })
      ]);
    });
};
