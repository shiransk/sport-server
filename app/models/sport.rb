class Sport < ApplicationRecord
  validates :name, :age, presence: true
end
