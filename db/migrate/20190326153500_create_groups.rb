class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.integer :creator_id, null: false 
      t.string :title, null: false
      t.text :description, null: false 
      t.boolean :public, default: true
      t.float :lat, null: false 
      t.float :lng, null: false 
      t.index :creator_id
      t.index :title, unique: true 
      t.timestamps
    end
  end
end
 