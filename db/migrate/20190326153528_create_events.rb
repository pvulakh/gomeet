class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :host_id, null: false 
      t.integer :group_id, null: false
      t.string :name, null: false 
      t.datetime :start_time, null: false 
      t.datetime :end_time, null: false 
      t.text :description, null: false 
      t.float :lat, null: false
      t.float :lng, null: false 
      t.index :host_id 
      t.index :group_id 
      t.index :name
      t.timestamps
    end
  end
end
 