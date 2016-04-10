class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :popularity
      t.string :artist_id
      t.string :image_url
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
