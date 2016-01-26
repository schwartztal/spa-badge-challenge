class WelcomeController < ApplicationController

  def index
  end

  def users
    @users = User.first
    if request.xhr?
      render json: @users
    else
      @users
    end
  end

end
