class AddImageUrlToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :image_url, :string, null: false, default: 'http://res.cloudinary.com/dcslgdwha/image/upload/v1495416657/Elliot_Grieveson_kqkf2w.png'
  end
end
