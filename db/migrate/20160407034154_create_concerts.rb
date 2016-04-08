class CreateConcerts < ActiveRecord::Migration
  def change
    create_table :concerts do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :concert_url
      t.integer :zip_code
      t.integer :artist_id
      t.datetime :date

      t.timestamps null: false
    end
  end
end
