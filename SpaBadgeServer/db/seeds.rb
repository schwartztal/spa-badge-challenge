# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(name: "Walker", cohort:"SF Island Foxes")
User.create!(name: "Julian", cohort:"SF Island Foxes")
User.create!(name: "Disco Stu", cohort:"SF Island Foxes")

Badge.create!(user_id: 1, content:"most likely to have big hair")
Badge.create!(user_id: 1, content:"most likely to paint his nails")
Badge.create!(user_id: 1, content:"most likely to buy us a beer")

Vote.create!(badge_id: 1, value: 1)
Vote.create!(badge_id: 2, value: -1)
Vote.create!(badge_id: 2, value: -1)
