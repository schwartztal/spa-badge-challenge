class VotesController < ApplicationController

  def create

    @vote = Vote.new(vote_params)
    p params
    if @vote.save
      render json: @vote.badge, status: :created, location: @vote
    else
      err
    end
  end

private

  def vote_params
    params.permit(:badge_id, :value)
  end

  def err
    render json: @vote.errors, status: :unprocessable_entity
  end
end
