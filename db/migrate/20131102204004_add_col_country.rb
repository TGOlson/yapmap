class AddColCountry < ActiveRecord::Migration
  def change
  	add_column :viewers, :country, :string
  end
end
