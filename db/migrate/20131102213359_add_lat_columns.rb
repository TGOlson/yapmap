class AddLatColumns < ActiveRecord::Migration
  def change
  	add_column :viewers, :latitude, :float
  	add_column :viewers, :longitude, :float
  end
end