class GamesController < ApplicationController

    def create
        game = Game.create(user_id: params[:user_id])

        render json: game
    end

    def update
        game = Game.find_by(id: params[:id])
        game.result = params[:result]
        game.save

        render json: game
    end

end
