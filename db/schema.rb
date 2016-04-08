# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160407034154) do

  create_table "artists", force: :cascade do |t|
    t.string   "name"
    t.string   "popularity"
    t.string   "image"
    t.string   "artist_id"
    t.integer  "user_id"
    t.integer  "jam_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "concerts", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.string   "concert_url"
    t.integer  "zip_code"
    t.integer  "artist_id"
    t.datetime "date"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password"
    t.string   "uid"
    t.string   "provider"
    t.integer  "zip_code"
    t.text     "token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
