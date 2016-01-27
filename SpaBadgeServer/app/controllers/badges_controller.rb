class BadgesController < ApplicationController

  def create
    p params[:name]
    @badge = Badge.new
    @user = User.find_by_name(params[:name])
    @badge.user_id = @user.id
    @badge.content = params[:content]
    if @badge.save
      @badges = @user.badges
      render :json => {:user => @user, :badges => @badges}
    else
      err
    end
  end


  def update
    @badge = Badge.find(params[:badge_id])
    @user = @badge.user
    @badge.increment(:score, by = params[:value])
    @badge.save
    @badges = @user.badges
    render :json => {:user => @user, :badges => @badges}
  end

private
  def err
    render json: @badge.errors, status: :unprocessable_entity
  end
end
