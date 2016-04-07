class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name
      t.string :popularity
      t.string :image
      t.string :artist_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
