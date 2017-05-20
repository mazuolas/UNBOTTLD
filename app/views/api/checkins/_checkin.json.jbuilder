json.extract! checkin, :id, :comment, :user, :drink, :image_url
json.time_ago time_ago_in_words(checkin.created_at)
