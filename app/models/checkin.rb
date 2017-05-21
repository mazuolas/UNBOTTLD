class Checkin < ApplicationRecord
  validates :rating, :image_url, :user_id, :drink_id, presence: true
  validates_inclusion_of :rating, in: 0..5, message: 'is required'
  belongs_to :user
  belongs_to :drink

end
