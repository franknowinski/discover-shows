class CreateUpcomingConcerts < ActiveRecord::Migration
  def change
    create_table :upcoming_concerts do |t|
      t.references :user, index: true, foreign_key: true
      t.references :concert, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
