class Course < ApplicationRecord
  belongs_to :user
  belongs_to :carnet
  belongs_to :bike
  has_many :drops, :dependent => :destroy
  has_many :pickups, :dependent => :destroy
end
