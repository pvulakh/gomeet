class CreateRsvps < ActiveRecord::Migration[5.2]
  def change
    create_table :rsvps do |t|
      t.integer :user_id, null: false 
      t.integer :event_id, null: false 
      t.boolean :rsvp, default: true
      t.index [:user_id, :event_id], unique: true 
      t.index :event_id
      t.timestamps
    end
  end
end
 