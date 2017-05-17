class CreateDrinks < ActiveRecord::Migration[5.0]
  def change
    create_table :drinks do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.integer :brewery_id, null: false
      t.float :abv, null: false
      t.float :average_rating, null: false

      t.timestamps
    end
    add_index :drinks, :brewery_id
  end
end
