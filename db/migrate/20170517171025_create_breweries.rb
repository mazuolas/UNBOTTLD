class CreateBreweries < ActiveRecord::Migration[5.0]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :image_url, null: false

      t.timestamps
    end
    add_index :breweries, :name, unique: true
  end
end
