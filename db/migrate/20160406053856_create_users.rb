class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :uid
      t.string :provider
      t.integer :zip_code
      t.text :token

      t.timestamps null: false
    end
  end
end
