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

# Card Seeds - online
# Card.create(name: "1", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_01_aatrox.png", top_value: 3, right_value: 10, bottom_value: 5, left_value: 6)
# Card.create(name: "2", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_02_ahri.png", top_value: 9, right_value: 7, bottom_value: 6, left_value: 3)
# Card.create(name: "3", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_03_akali.png", top_value: 5, right_value: 5, bottom_value: 9, left_value: 8)
# Card.create(name: "4", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_04_alistar.png", top_value: 6, right_value: 6, bottom_value: 6, left_value: 6)
# Card.create(name: "5", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_05_amumu.png", top_value: 5, right_value: 3, bottom_value: 8, left_value: 3)
# Card.create(name: "6", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_06_anivia.png", top_value: 8, right_value: 5, bottom_value: 4, left_value: 3)
# Card.create(name: "7", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_07_annie.png", top_value: 7, right_value: 2, bottom_value: 4, left_value: 5)
# Card.create(name: "8", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_08_ashe.png", top_value: 4, right_value: 9, bottom_value: 6, left_value: 2)
# Card.create(name: "9", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_09_aurelion_sol.png", top_value: 5, right_value: 3, bottom_value: 9, left_value: 7)
# Card.create(name: "10", img: "https://mod-3-project.s3.eu-west-2.amazonaws.com/card_10_azir.png", top_value: 9, right_value: 3, bottom_value: 2, left_value: 9)


# ../backend/app/assets/images/rift_map.png
# Card Seeds - offline
Card.create(name: "1", img: '../backend/app/assets/images/card_01_aatrox.png', top_value: 3, right_value: 10, bottom_value: 5, left_value: 6)
Card.create(name: "2", img: "../backend/app/assets/images/card_02_ahri.png", top_value: 9, right_value: 7, bottom_value: 6, left_value: 3)
Card.create(name: "3", img: "../backend/app/assets/images/card_03_akali.png", top_value: 5, right_value: 5, bottom_value: 9, left_value: 8)
Card.create(name: "4", img: "../backend/app/assets/images/card_04_alistar.png", top_value: 6, right_value: 6, bottom_value: 6, left_value: 6)
Card.create(name: "5", img: "../backend/app/assets/images/card_05_amumu.png", top_value: 5, right_value: 3, bottom_value: 8, left_value: 3)
Card.create(name: "6", img: "../backend/app/assets/images/card_06_anivia.png", top_value: 8, right_value: 5, bottom_value: 4, left_value: 3)
Card.create(name: "7", img: "../backend/app/assets/images/card_07_annie.png", top_value: 7, right_value: 2, bottom_value: 4, left_value: 5)
Card.create(name: "8", img: "../backend/app/assets/images/card_08_ashe.png", top_value: 4, right_value: 9, bottom_value: 6, left_value: 2)
Card.create(name: "9", img: "../backend/app/assets/images/card_09_aurelion_sol.png", top_value: 5, right_value: 3, bottom_value: 9, left_value: 7)
Card.create(name: "10", img: "../backend/app/assets/images/card_10_azir.png", top_value: 9, right_value: 3, bottom_value: 2, left_value: 9)




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