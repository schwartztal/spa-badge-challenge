class Badge < ActiveRecord::Base
  belongs_to :user
  has_many :votes

  def score
    self.votes.reduce(0) do |score, vote|
      score += vote.value
    end
  end

end
