class CreateUserCards < ActiveRecord::Migration[5.2]
  def change
    create_table :user_cards do |t|
      t.references :user, foreign_key: true
      t.references :card, foreign_key: true

      t.timestamps
    end
  end
end
