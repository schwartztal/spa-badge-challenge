class UsersController < ApplicationController

  def index
    @users = User.all
    render :json => {:users => @users}
  end

  def create
  end

  def show
    @user = User.find_by_name(params[:id])
    @badges = @user.badges
    render :json => {:user => @user, :badges => @badges}
  end


end
