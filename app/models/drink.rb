class Drink < ApplicationRecord
  include PgSearch
  validates :name,
   :description,
   :image_url,
   :brewery,
   :abv,
   :average_rating,
   presence: true

   belongs_to :brewery
   has_many :checkins, dependent: :destroy

   pg_search_scope :search_by_name,
    against: :name,
    associated_against: {brewery: :name }, 
    using: { tsearch: {prefix: true } }

   def checkin_count
     self.checkins.count
   end
end
