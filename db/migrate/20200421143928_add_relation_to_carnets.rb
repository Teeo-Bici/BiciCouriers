class AddRelationToCarnets < ActiveRecord::Migration[5.2]
  def change
    add_reference :carnets, :carnet_templates, foreign_key: true
  end
end
