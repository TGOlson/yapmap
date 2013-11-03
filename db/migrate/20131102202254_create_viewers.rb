class CreateViewers < ActiveRecord::Migration
	def change
		create_table :viewers do |t|
			t.string  :ip_address
			t.string  :city
			t.string  :region_name
			t.string  :zipcode
			t.integer :visits,   default: 1
			t.integer :clicks,   default: 0
			t.string  :dot_color
			t.integer :dot_size, default: 1

			t.timestamps 
		end
	end
end
