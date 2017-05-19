class CreateCheckins < ActiveRecord::Migration[5.0]
  def change
    create_table :checkins do |t|
      t.float :rating, null: false
      t.text :comment
      t.string :image_url, null: false
      t.integer :user_id, null: false
      t.integer :drink_id, null: false

      t.timestamps
    end
    add_index :checkins, :user_id
    add_index :checkins, :drink_id
  end
end
