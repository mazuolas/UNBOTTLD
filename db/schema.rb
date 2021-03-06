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

ActiveRecord::Schema.define(version: 20170522012628) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "breweries", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "location",   null: false
    t.string   "image_url",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_breweries_on_name", unique: true, using: :btree
  end

  create_table "checkins", force: :cascade do |t|
    t.float    "rating",     null: false
    t.text     "comment"
    t.string   "image_url",  null: false
    t.integer  "user_id",    null: false
    t.integer  "drink_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["drink_id"], name: "index_checkins_on_drink_id", using: :btree
    t.index ["user_id"], name: "index_checkins_on_user_id", using: :btree
  end

  create_table "drinks", force: :cascade do |t|
    t.string   "name",           null: false
    t.text     "description",    null: false
    t.string   "image_url",      null: false
    t.integer  "brewery_id",     null: false
    t.float    "abv",            null: false
    t.float    "average_rating", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["brewery_id"], name: "index_drinks_on_brewery_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                             null: false
    t.string   "password_digest",                                                                                                      null: false
    t.string   "session_token",                                                                                                        null: false
    t.datetime "created_at",                                                                                                           null: false
    t.datetime "updated_at",                                                                                                           null: false
    t.string   "image_url",       default: "https://res.cloudinary.com/dcslgdwha/image/upload/v1495416657/Elliot_Grieveson_kqkf2w.png", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
