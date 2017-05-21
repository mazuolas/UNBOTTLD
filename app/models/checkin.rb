class Checkin < ApplicationRecord
  validates :rating, :image_url, :user_id, :drink_id, presence: true
  validates_inclusion_of :rating, in: 0..5, message: 'is required'
  belongs_to :user
  belongs_to :drink

  after_save :set_new_average

  def set_new_average
    new_avg = self.drink.checkins.average(:rating).to_f.round(2)
    self.drink.update(average_rating: new_avg)
  end
end
