json.extract! checkin, :id, :comment, :image_url, :rating
json.time_ago time_ago_in_words(checkin.created_at)
json.user checkin.user.username
json.brewery checkin.drink.brewery.name
json.drink checkin.drink.name
