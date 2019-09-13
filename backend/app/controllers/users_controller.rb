class UsersController < ApplicationController

    def results
        user = User.find_by(id: params[:id])

        render json: {
            wins: user.wins,
            draws: user.draws,
            losses: user.losses
        }
    end

    def show
        user = User.find_by(username: params[:username])

        render json: user
    end

    def create
        user = User.new()
        user.name = params[:user][:name]
        user.username = params[:user][:username]
        user.email = params[:user][:email]
        user.save

        render json: user
    end

end
