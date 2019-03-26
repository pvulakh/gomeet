class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false 
      t.integer :group_id, null: false
      t.text :intro
      t.index :user_id
      t.index :group_id
      t.index [:user_id, :group_id], unique: true
      t.timestamps
    end
  end
end
 