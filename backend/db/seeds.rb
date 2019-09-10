# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User Seeds
User.create(name: "Rod", username: "RodCardenas", email: "rod@gmail.com")
User.create(name: "Eliot", username: "EliotHowes", email: "eliot@gmail.com")
User.create(name: "Adnan", username: "AdnanAzim", email: "adnan@gmail.com")
User.create(name: "Mary", username: "MarySelig", email: "mary@gmail.com")
User.create(name: "Nick", username: "NickCharlet", email: "nick@gmail.com")
User.create(name: "Harry", username: "HarryChopra", email: "harry@gmail.com")

# Game Seeds
Game.create(user_id: 1)

# Card Seeds
Card.create(name: "1", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_01.png", top_value: 8, right_value: 4, bottom_value: 5, left_value: 1)
Card.create(name: "2", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_02.png", top_value: 5, right_value: 9, bottom_value: 7, left_value: 5)
Card.create(name: "3", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_03.png", top_value: 2, right_value: 5, bottom_value: 9, left_value: 5)
Card.create(name: "4", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_04.png", top_value: 7, right_value: 3, bottom_value: 3, left_value: 7)
Card.create(name: "5", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_05.png", top_value: 4, right_value: 8, bottom_value: 2, left_value: 6)
Card.create(name: "6", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_06.png", top_value: 6, right_value: 5, bottom_value: 6, left_value: 9)
Card.create(name: "7", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_07.png", top_value: 7, right_value: 5, bottom_value: 9, left_value: 5)
Card.create(name: "8", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_08.png", top_value: 5, right_value: 7, bottom_value: 8, left_value: 5)
Card.create(name: "9", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_09.png", top_value: 6, right_value: 7, bottom_value: 3, left_value: 10)
Card.create(name: "10", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_10.png", top_value: 3, right_value: 10, bottom_value: 5, left_value: 6)

# User_Card Seeds
UserCard.create(user_id: 1, card_id: 1)
UserCard.create(user_id: 1, card_id: 2)
UserCard.create(user_id: 1, card_id: 3)
UserCard.create(user_id: 1, card_id: 4)
UserCard.create(user_id: 1, card_id: 5)
UserCard.create(user_id: 1, card_id: 6)
UserCard.create(user_id: 1, card_id: 7)
UserCard.create(user_id: 1, card_id: 8)
UserCard.create(user_id: 1, card_id: 9)
UserCard.create(user_id: 1, card_id: 10)