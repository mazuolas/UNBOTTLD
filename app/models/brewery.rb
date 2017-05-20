class Brewery < ApplicationRecord
  validates :name, :location, :image_url, presence: true

  has_many :drinks
end
