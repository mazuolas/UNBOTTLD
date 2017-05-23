# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(
  username: 'mark',
  password: 'password',
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495411505/jkbinfh7wmbvj4gri8vw.jpg'
)
user2 = User.create(username: 'guest', password: 'supersecretguestpassword')

user3 = User.create(
  username: 'Landfill',
  password: 'password',
  image_url: "http://res.cloudinary.com/dcslgdwha/image/upload/v1495428451/How_i_picture_quot_lot_of_energy_quot_drunks_get_depressed__75c0c631c92233070c0d714893160d49_sdaxea.jpg"
)


user4 = User.create(
  username: 'Fink',
  password: 'password',
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495429017/970032_060_xp2jdd.jpg'
)

user5 = User.create(
  username: 'Jan',
  password: 'password',
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495429094/slideshow-02.12.14-beerfest-paul-soter_p6whrq.jpg'
)

user6 = User.create(
  username: 'Todd',
  password: 'password',
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495429398/slideshow-02.12.14-beerfest-Erik-Stolhanske_jdwsq1.jpg'
)
user7 = User.create(
  username: 'Barry',
  password: 'password',
  image_url: "http://res.cloudinary.com/dcslgdwha/image/upload/v1495428707/hqdefault_yxwkpk.jpg"
)

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
brewery3 = Brewery.create(
name: 'Weyerbacher',
location: "Easton, PA",
image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495237992/9263734.weyerbacher-db_ih8h9z.jpg'
)

brewery4 = Brewery.create(
name: 'Unibroue',
location: "Quebec, Canada",
image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495496474/unibroue0_gh2yvb.png'
)

brewery5 = Brewery.create(
name: '21st Amendment',
location: "Street San Francisco, CA",
image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495497280/21st-Amendment-logo_jyppld.jpg'
)

brewery6 = Brewery.create(
name: 'Tröegs',
location: "Hershey, PA",
image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495498167/troegs_rlbh0a.jpg'
)

brewery7 = Brewery.create(
name: 'Stone',
location: "Escondido, CA",
image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495500240/Stone_Brewing_Company_0951d_450x450_afsvsc.png'
)

brewery8 = Brewery.create(
name: 'Dogfish Head',
location: "Milton, DE",
image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495500766/Dogfishhead_g164es.gif'
)

# brewery = Brewery.create(
# name: '',
# location: "",
# image_url: ''
# )

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
drink5 = Drink.create(
  name: "Merry Monks",
  brewery_id: brewery3.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495334044/21424_ropyc0.gif',
  description: "Merry Monks, 9.3% ABV, is a Belgian-style Tripel. Pilsner malt combined with an Abbey yeast strain yields a remarkable and complex flavor packed with notes of spice, banana and pear. Nicely balanced, with a moderate to dry finish.",
  abv: 9.3,
  average_rating: 3.83
)
drink6 = Drink.create(
  name: "Winter Ale",
  brewery_id: brewery3.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495333738/2012-12-03-winter-ale-int_vgs3c5.jpg',
  description: "At Weyerbacher we have created a Winter Ale that is a must for any malty beer lover. Winner of a Silver Medal in the 1998 World Beer Championships, Weyerbacher Winter Ale is brewed with deep-roasted chocolate malt. The taste predominates with a warm, roasty flavor, balanced out with a slightly dry finish. It is smooth but not cloying, with a warming belt of alcohol (5.6% ABV). Although winter ales predate history, they are believed to have their origin in the pagan celebrations of winter solstice. Later, when monasteries produced the local brew, winter ales were made each year to commemorate the birth of Christ. Back then, winter ales were brewed full-bodied as a source of nutrition for the upcoming winter months. Today, winter ales are typified by their seasonality, their rich, malty flavors and by their deep, dark coloration. Generally available November-March, Weyerbacher Winter Ale is the perfect libation for a winter meal, with good friends, or beside a warm fire fending off a cold winter night.",
  abv: 5.6,
  average_rating: 3.45
)

drink7 = Drink.create(
  name: "La Fin Du Monde",
  brewery_id: brewery4.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495496548/beer_1094_aszgog.jpg',
  description: "La Fin du Monde was developed through 18 months of research on a unique strain of yeast originating from Europe. It is brewed in honor of the intrepid European explorers who believed they had reached the “end of the world” when they discovered North America ‘the new world’. This triple-style golden ale recreates the style of beer originally developed in the Middle Ages by trappist monks for special occasions and as such it was the first of its kind to be brewed in North America.",
  abv: 9,
  average_rating: 4.39
)

drink26 = Drink.create(
  name: "Back in Black",
  brewery_id: brewery5.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495497497/21st_20Amendment_20Back_20in_20Black_20IPA_wlnlfj.jpg',
  description: "Inspired by Paul Revere’s midnight ride, we rebelled against the British style IPA, embraced the more aggressive American version and then recast it in bold, brave, defiant black. Our Black IPA is a Declaration of Independence from the tyranny of the expected.",
  abv: 6.8,
  average_rating: -1
)

drink8 = Drink.create(
  name: "Fireside Chat",
  brewery_id: brewery5.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495497625/FIRESIDE_CHAT_3-1_bhnqlz.jpg',
  description: "Like FDR’s Depression-era radio addresses, which were like a kick in the butt and a hug at the same time, our Fireside Chat is a subtle twist on the traditional seasonal brew. We begin with a rich, dark, English-style ale and then we improvise with spices until we know we have a beer worth sharing with the nation.",
  abv: 7.9,
  average_rating: -1
)

drink9 = Drink.create(
  name: "Monk's Blood",
  brewery_id: brewery5.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495497851/21st-amendment-monks-blood-e1332266747264-200x200_t68uf2.png',
  description: "Monk’s Blood pays homage to the monk’s of Belgium’s monasteries who have been brewing some of the world’s great beer for centuries. During times of fasting, the monks subsist solely on beer, which they refer to as ‘liquid bread’. Beer, quite literally, is in their blood. The most sublime of the monk’s premium brews is dark like blood, rich and nourishing.",
  abv: 8.3,
  average_rating: -1
)

drink10 = Drink.create(
  name: "Troegenator",
  brewery_id: brewery6.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495498277/Troegs-Troegenator_sha5is.jpg',
  description: "Monks had fasting figured out. No food? No problem. Just drink a Double Bock. Thick and chewy with intense notes of caramel, chocolate and dried stone fruit, ‘Nator (as we call him) serves as a tribute to this liquid bread style.",
  abv: 8.2,
  average_rating: -1
)

drink11 = Drink.create(
  name: "Mad Elf",
  brewery_id: brewery6.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495498400/madelf-300x300-180x180_nchw9j.jpg',
  description: "The holidays at Tröegs start with our inner Mad Elf momentarily taking over the brew deck. So blame “him” for this cheerful ruby red creation reminiscent of ripened cherries, raw honey and cocoa with notes of cinnamon, clove and allspice.",
  abv: 11,
  average_rating: -1
)

drink12 = Drink.create(
  name: "Perpetual IPA",
  brewery_id: brewery6.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495498504/perpetual_y9qtrf.jpg',
  description: "At Tröegs, artisanal meets mechanical in a state of IPA we call Perpetual. Cycling through our HopBack vessel and dry-hopping method, this bold Imperial Pale Ale emerges rife with sticky citrus rind, pine balm and tropical fruit.",
  abv: 7.5,
  average_rating: -1
)

drink13 = Drink.create(
  name: "Sunshine Pils",
  brewery_id: brewery6.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495498644/sticker_sunshine_nygp5j.jpg',
  description: "Like the rising sun, Sunshine Pils delivers winter, spring, summer and fall. This deceptively complex pilsner is all about the tightrope walk of two-row barley, zesty Saaz hops and lager yeast. It’s a go-to when the sun is shining, and it makes us happy when skies are gray.",
  abv: 4.5,
  average_rating: -1
)

drink14 = Drink.create(
  name: "Anti Venom",
  brewery_id: brewery1.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495218015/vuv19jrztfpz6gh3wxo1.jpg',
  description: "Anti-Venom (Centennial), the newest variant in the ANTI-VENOM Series, is a medium-bodied, 7% abv, IPA hopped solely with American Centennial, adding notes of grapefruit and lemon to the nose and palate, and giving the beer a crisp, clean, bitter finish. ANTI-VENOM (Centennial) has arrived, experience the bite of the century.",
  abv: 7,
  average_rating: -1
)

drink15 = Drink.create(
  name: "eXile X-9",
  brewery_id: brewery1.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495499050/eXile-X-9-865cc-Coffee-Stout-logo_lzrngh.jpg',
  description: "This classic, 6.5% abv, stout is brewed with cold steeped, locally roasted Cafe Racer XXX 865cc coffee to turbocharge the beer with intense flavors and aromas of roasted coffee; then cask infused with chocolate and vanilla for an extra rush of flavor. Chocolate Vanilla X-9 is at the line; pin the throttle!",
  abv: 6.5,
  average_rating: -1
)

drink16 = Drink.create(
  name: "Grid Lock",
  brewery_id: brewery1.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495499375/15746882531_18c322a4ee_duwywy.jpg',
  description: "Collaboration. DuClaw and Mad Fox combined 40 years of experience and untold hours in I-95 traffic to create this clean, refreshing lager packed with the flavors and aromas of northwest American hops. Pop the top and... Escape the rat race!",
  abv: 5,
  average_rating: -1
)

drink17 = Drink.create(
  name: "Blithering Idiot",
  brewery_id: brewery3.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495499759/beer_1409_ihna6w.jpg',
  description: "Blithering Idiot, 11.1% ABV, is brewed in the British tradition of balanced, hearty ales.  It’s a deep-copper ale with notes of date and fig. The finish is warm and fruity and begs for the next sip.",
  abv: 11.1,
  average_rating: -1
)

drink18 = Drink.create(
  name: "Tarte Nouveau",
  brewery_id: brewery3.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495499923/weyerbacher-blood-orange-tarte-nouveau_l5jymg.jpg',
  description: "Tarte Nouveau, 3.9% ABV, is kettle-soured with lactobacillus. This tart beer pours pale yellow with a large, dense, white head. Tarte is a refreshing brew with a dry finish that’s pretty much perfect for every situation.",
  abv: 3.9,
  average_rating: -1
)

drink19 = Drink.create(
  name: "Stone IPA",
  brewery_id: brewery7.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495500329/IPA_label_small_oopwev.jpg',
  description: "By definition, an India pale ale is hoppier and higher in alcohol than its little brother, pale ale—and we deliver in spades. One of the most well-respected and best-selling IPAs in the country, this golden beauty explodes with tropical, citrusy, piney hop flavors and aromas, all perfectly balanced by a subtle malt character. This crisp, extra hoppy brew is hugely refreshing on a hot day, but will always deliver no matter when you choose to drink it.",
  abv: 6.9,
  average_rating: -1
)

drink20 = Drink.create(
  name: "Ruination",
  brewery_id: brewery7.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495500488/ruination_slzb4a.jpg',
  description: "Stone Ruination IPA was the first full-time brewed and bottled West Coast double IPA on the planet. As craft beer has evolved over the years, so too have techniques for maximizing hop flavors and aromas. For the second incarnation of our groundbreaking India pale ale, we employ dry hopping and hop bursting to squeeze every last drop of piney, citrusy, tropical essence from the hops that give this beer its incredible character. We’ve also updated the name to Stone Ruination Double IPA 2.0 to reflect the imperial-level intensity that’s evident in every sip. Join us in cheering this, the second stanza in our “Liquid Poem to the Glory of the Hop.”",
  abv: 8.5,
  average_rating: -1
)

drink21 = Drink.create(
  name: "90 Minute IPA",
  brewery_id: brewery8.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495500882/feat-DogFish90IPA_upxy6j.jpg',
  description: 'Esquire Magazine calls our 90 Minute IPA "perhaps the best IPA in America." An imperial IPA best savored from a snifter, 90 Minute has a great malt backbone that stands up to the extreme hopping rate.',
  abv: 9,
  average_rating: -1
)

drink22 = Drink.create(
  name: "120 Minute IPA",
  brewery_id: brewery8.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495500991/120minutelabel-cropped_kyhkok.jpg',
  description: "Too extreme to be called beer? 120 Minute IPA is brewed to a colossal 45-degree plato, boiled for a full two hours while being continuously hopped with high-alpha American hops, then dry-hopped daily in the fermenter for a month and aged for another month on whole-leaf hops!",
  abv: 18,
  average_rating: -1
)

drink23 = Drink.create(
  name: "Midas Touch",
  brewery_id: brewery8.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495501100/midas_h81uge.jpg',
  description: "This sweet yet dry beer is made with ingredients found in 2,700-year-old drinking vessels from the tomb of King Midas. Somewhere between wine and mead, Midas will please the chardonnay and beer drinker alike.",
  abv: 9,
  average_rating: -1
)

drink24 = Drink.create(
  name: "Beer For Breakfast",
  brewery_id: brewery8.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495501218/HvvnbHvcZdUnxz1VA_pBJopguzmWaPerKvTvatAv9fUm_16Jtmt5mbjbBP0C-j1VLHWsxixdLEjhijAY6ovaUoYpFF3e_s750_letj2x.jpg',
  description: "A stout tricked out with all sorts of breakfast ingredients including Guatemalan Antigua cold press coffee, Maple syrup harvested from Western Massachusetts and for the quintessential Delaware breakfast touch - Rapa Scrapple and their secret blend of spices.",
  abv: 7.4,
  average_rating: -1
)

drink25 = Drink.create(
  name: "American Beauty",
  brewery_id: brewery8.id,
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495501767/Dogfish-Head-American-Beauty_labs7j.jpg',
  description: "American Beauty, an Imperial Pale Ale inspired by the Grateful Dead, captures the spirits of the band's 30 years of touring and recording. Dogfish Head and the Dead both built their followings by connecting directly with beer lovers and music lovers, so we asked those loyal fans to help drive the recipe.",
  abv: 9,
  average_rating: -1
)

# drink = Drink.create(
#   name: "",
#   brewery_id: ,
#   image_url: '',
#   description: "",
#   abv: ,
#   average_rating: -1
# )

checkin1 = Checkin.create(
  user_id: user1.id,
  drink_id: drink1.id,
  rating: 5,
  comment: 'Its my favorite beer ever!!!',
  image_url: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495411642/duclaw-devils-due-2_lssy38.jpg'
)

# checkin = Checkin.create(
#   user_id: ,
#   drink_id: ,
#   rating: ,
#   comment: ,
#   image_url:
# )
USERS = [user2, user3, user4, user5, user6, user7]
DRINKS = [drink1, drink2, drink3, drink4, drink5, drink6, drink7, drink8, drink9, drink10, drink11, drink12, drink13, drink14, drink15, drink16, drink17, drink18, drink19, drink20, drink21, drink22, drink23, drink24, drink25, drink26]
r = Random.new
IMAGE = [
  "",
  "",
  "",
  "http://res.cloudinary.com/dcslgdwha/image/upload/v1495430741/judges-most-important-craft-beers-ft-ss0117_nfdfwz.jpg",
  "http://res.cloudinary.com/dcslgdwha/image/upload/v1495430007/beer-1290633_960_720_qe9yl5.jpg",
  "http://res.cloudinary.com/dcslgdwha/image/upload/v1495430081/beer-422138_960_720_omo69y.jpg",
  "http://res.cloudinary.com/dcslgdwha/image/upload/v1495430153/8282413073_a72d998d47_b_hpv7ob.jpg",
  "http://res.cloudinary.com/dcslgdwha/image/upload/v1495430361/Why-Beer-Is-Good-For-You_mbk2qk.jpg"
]
600.times do
  drink = DRINKS.sample
  image = IMAGE.sample
  Checkin.create(
    user_id: USERS.sample.id,
    drink_id: drink.id,
    rating: r.rand(4)+2,
    comment: '',
    image_url: (image == "") ? drink.image_url : image
  )
end
