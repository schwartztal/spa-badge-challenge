class User < ActiveRecord::Base
  has_many :badges, -> { order 'score desc' }
end
