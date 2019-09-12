class GamesController < ApplicationController

    def create
        # byebug
        game = Game.create(user_id: params[:user_id])
        # byebug
        render json: game
    end

    def update
        # byebug
        game = Game.find_by(id: params[:id])
        game.result = params[:result]
        game.save

        render json: game
    end

    private 

    def game_params
        # byebug
        require(params[:game]).permit(:user_id)
    end

end
