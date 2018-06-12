class CreateNotifications < ActiveRecord::Migration[5.1]
  def change
    create_table :notifications do |t|
      t.string :event
      t.integer :receiver_id
      t.integer :sender_id

      t.timestamps
    end
  end
end
