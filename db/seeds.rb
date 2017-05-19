# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'mark', password: 'password')
user2 = User.create(username: 'guest', password: 'supersecretguestpassword')

brewery1 = Brewery.create(
name: 'DuClaw',
location: "Baltimore, MD",
image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495232048/dcbcicon_aksa7o.jpg'
)

brewery2 = Brewery.create(
name: 'Yuengling',
location: "Pottsville, PA",
image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495232017/Yuengling_logo_q6ennp.png'
)

drink1 = Drink.create(
  name: "Devil's Due",
  brewery_id: brewery1.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495215332/noazhmpvboe3pwdtfnao.jpg',
  description: "The perfect balance of Retribution Imperial Stout and Devil’s Milk Barleywine, Devil’s Due is black, full-bodied, and smoothly drinkable. Its seductive swirl of dark chocolate, coffee, smoky malt, and citrus fruit flavors, infused with notes of charred oak, vanilla and caramelized sugar, disguises a strong, warming alcohol presence (11% abv) that reminds those who dance with the Devil that eventually, a price will be paid.",
  abv: 11.0,
  average_rating: 4.16
)
drink2 = Drink.create(
  name: "Funk",
  brewery_id: brewery1.id,
  image_url: 'http://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_220728.jpg',
  description: "The traditional American Wheat Ale serves as a solid baseline, but we couldn’t be content until we tore the roof off this sucker! Funk, our Blueberry Citrus Wheat Ale, sets the rhythm with a soulful fusion of American wheat and hops, before unleashing a stunning encore with big notes of blueberry and Meyer lemon. It’s no jive, you’ll just dig it!",
  abv: 5.0,
  average_rating: 3.59
)


drink3 = Drink.create(
  name: "Yuengling Lager",
  brewery_id: brewery2.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495232501/100478_j3rfdu.jpg',
  description: "Famous for its rich amber color and medium-bodied flavor with roasted caramel malt for a subtle sweetness and a combination of cluster and cascade hops, this true original delivers a well-balanced taste with very distinct character. Born from a historic recipe that was resurrected in 1987, Yuengling Traditional Lager is a true classic.",
  abv: 4.5,
  average_rating: 3.37
)

drink4 = Drink.create(
  name: "Yuengling Light",
  brewery_id: brewery2.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495231678/cebgc65lapiqvitxe1dc.jpg',
  description: "An exceptional brew that appeals to consumers who don’t want to sacrifice character for a low-calorie light beer. Masterfully developed to maintain the full flavor profile akin to our flagship Lager brand, but has only 99 calories per 12oz serving. Skillfully pairing a caramel malt flavor and mild hop character creates a beautifully rich-colored beer with deep amber highlights that finishes smooth and clean.",
  abv: 3.4,
  average_rating: 2.87
)
