class Drink < ApplicationRecord
  validates :name,
   :description,
   :image_url,
   :brewery,
   :abv,
   :average_rating,
   presence: true

   belongs_to :brewery
   has_many :checkins, dependent: :destroy

   def checkin_count
     self.checkins.count
   end
end
