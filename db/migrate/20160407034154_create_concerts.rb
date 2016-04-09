class CreateConcerts < ActiveRecord::Migration
  def change
    create_table :concerts do |t|
      t.string :title
      t.string :name
      t.string :city
      t.string :state
      t.string :status
      t.string :ticket_url
      t.integer :artist_id
      t.datetime :date

      t.timestamps null: false
    end
  end
end
