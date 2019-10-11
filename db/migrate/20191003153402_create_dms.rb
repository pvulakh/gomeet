class CreateDms < ActiveRecord::Migration[5.2]
  def change
    create_table :dms do |t|
      t.integer :dmee_id, presence: true
      t.integer :dmer_id, presence: true 
      t.timestamps
    end
  end
end
