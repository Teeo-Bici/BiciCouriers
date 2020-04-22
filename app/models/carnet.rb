class Carnet < ApplicationRecord
  belongs_to :user
  belongs_to :carnet_template
  has_many :courses, :dependent => :destroy



end
