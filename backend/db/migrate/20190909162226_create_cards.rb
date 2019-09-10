class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :img
      t.integer :top_value
      t.integer :right_value
      t.integer :bottom_value
      t.integer :left_value

      t.timestamps
    end
  end
end
