class AddMessagesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, presence: true 
      t.integer :author_id, presence: true 
      t.integer :dm_id, presence: true 
      t.timestamps
    end 
  end
end
