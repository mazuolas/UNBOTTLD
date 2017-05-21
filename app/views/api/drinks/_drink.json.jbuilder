json.extract! drink, :id, :name, :description, :image_url, :brewery_id, :abv, :average_rating, :created_at
json.brewery drink.brewery.name
json.created_at "#{drink.created_at.month}/#{drink.created_at.day}/#{drink.created_at.year}"
json.checkin_count drink.checkin_count
