class Drink < ApplicationRecord
  validates :name,
   :description,
   :image_url,
   :brewery_id,
   :abv,
   :average_rating,
   null: false

   belongs_to :brewery

   
end
