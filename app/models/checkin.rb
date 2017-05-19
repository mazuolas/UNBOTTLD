class Checkin < ApplicationRecord
  validates :rating, :image_url, :user_id, :drink_id, presence: true
  validates_inclusion_of :rating, in: 1..5
  belongs_to :user
  belongs_to :drink

end
