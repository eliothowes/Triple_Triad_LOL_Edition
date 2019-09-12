class UsersController < ApplicationController

    def results
        byebug
        user = User.find_by(params[:id])

        render json: {
            wins: user.wins,
            draws: user.draws,
            losses: user.losses
        }
    end

end
