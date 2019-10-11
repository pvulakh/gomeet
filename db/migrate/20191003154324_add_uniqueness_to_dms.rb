class AddUniquenessToDms < ActiveRecord::Migration[5.2]
  def change
    add_index :dms, [:dmer_id, :dmee_id], unique: true 
  end
end
