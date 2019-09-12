class User < ApplicationRecord
    has_many :games
    has_many :user_cards
    has_many :cards, through: :user_cards

    def results
        self.games.map{|game| game.result}
    end

    def wins
        self.results.count{|result| result == 'WIN'}
    end

    def draws
        self.results.count{|result| result == 'DRAW'}
    end

    def losses
        self.results.count{|result| result == 'LOSS'}
    end

end
