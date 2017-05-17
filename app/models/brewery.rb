class Brewery < ApplicationRecord
  validates :name, :location, :image_url, null: false

  has_many :drinks
end
