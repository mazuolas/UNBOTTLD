json.extract! checkin, :id, :comment, :image_url, :rating, :user_id, :drink_id
json.time_ago time_ago_in_words(checkin.created_at)
json.user checkin.user.username
json.brewery checkin.drink.brewery.name
json.drink checkin.drink.name
json.drink_image checkin.drink.image_url
