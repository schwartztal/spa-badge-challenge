class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :content
      t.references :user
      
      t.timestamps null: false
    end
  end
end