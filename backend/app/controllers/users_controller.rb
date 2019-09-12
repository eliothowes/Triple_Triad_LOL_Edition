class UsersController < ApplicationController

    def results
        user = User.find_by(params[:id])

        render json: {
            wins: user.wins,
            draws: user.draws,
            losses: user.losses
        }
    end

    def create
        user = User.new()
        user.name = params[:user][:name]
        user.username = params[:user][:username]
        user.email = params[:user][:email]
        user.save

        render json: user
    end

    private 

    def user_params
        require(params[:user]).permit(:name, :username, :email)
    end
end
