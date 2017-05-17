# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'mark', password: 'password')

drink1 = Drink.create(
  name: "Devil's Due",
  brewery_id: 1,
  image_url: 'http://beerstreetjournal.com/wp-content/uploads/Duclaw-Devils-Due.jpg',
  description: "The perfect balance of Retribution Imperial Stout and Devil’s Milk Barleywine, Devil’s Due is black, full-bodied, and smoothly drinkable. Its seductive swirl of dark chocolate, coffee, smoky malt, and citrus fruit flavors, infused with notes of charred oak, vanilla and caramelized sugar, disguises a strong, warming alcohol presence (11% abv) that reminds those who dance with the Devil that eventually, a price will be paid.",
  abv: 11.0,
  average_rating: 4.16
)

brewery1 = Brewery.create(
  name: 'DuClaw',
  location: "Baltimore, MD",
  image_url: 'http://beerpulse.com/wp-content/uploads/2011/09/dcbcicon.jpg'
)
