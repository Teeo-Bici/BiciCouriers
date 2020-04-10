class Pickup < ApplicationRecord
  belongs_to :course

  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end
