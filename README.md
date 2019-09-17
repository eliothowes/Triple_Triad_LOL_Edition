# mod_3_project

All game concepts are based on work by Square Enix, and music is
property of Squre Enix.

Characters and graphics are based on work from Riot Games and are property of Riot Games.

Based on the Final Fantasy VIII card game Triple Triad.
Built with Ruby on Rails Backend
Single Page Frontend Using Vanilla JS

Models:
- Users
- UserGameCards
- Games
- Cards


Relationships:
						>— Games 
User  —<  UserGameCards 				  
						>—  Cards 		

User
has_many :user_game_cards
has_many :games, through: :user_game_cards
has_many :cards, through: :user_game_cards


User_Game_Card
belongs_to :user
belongs_to :game
belongs_to :card


Game
has_many :user_game_cards
has_many :cards, through: :user_game_cards
has_many :users, through: :user_game_cards

Card
has_many :user_game_cards
has_many :games, through: :user_game_cards
has_many :users, through: :user_game_cards


MVP: 
- [ ] User should be able to login and logout using username and email address
- [ ] User should be able to see their results stats
- [ ] There will be 10 cards with their values hard coded and they will be blank with no styling
- [ ] User should be able to start a new game
- [ ] User gets randomly assigned 5 cards as does a CPU
- [ ] Randomly start with either user or cpu
- [ ] User can select any of their 5 cards to play and positions this on the board
- [ ] CPU picks random free position and random card to play
- [ ] Game score is kept track of
- [ ] Result is shown (win, draw, loss)
- [ ] Can start a new game


Stretch Goals:
- [ ] Build logic/AI where CPU plays actual moves and selects appropriate cards
- [ ] Styling of board and cards
- [ ] Build more cards (increase from 10)
- [ ] Have your card collection and take cards from CPU when you win
- [ ] Progressively more difficult CPU
