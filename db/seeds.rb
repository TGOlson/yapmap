require 'faker'

class CreateViewers
	def self.populate!
		5.times do
			self.create_viewer_seed
		end
	end


	def self.create_viewer_seed
    g = self.ip_to_location_seed

    v = Viewer.new  ip_address:  g['ip'],
		   	        city:        g['city'],
					region_name: g['region_name'],
					zipcode:     g['zipcode'],
					country:     g['country_name'],
					latitude:    g['latitude'],
					longitude:   g['longitude'],
					dot_color:   COLORS.sample

	v.save unless self.bad_listing?(v)
  end

    def self.bad_listing?(v)
      ( v.country.empty? || v.country == 'Reserved' ) ||
      ( v.city.empty? && v.region_name.empty?)
    end

  	def self.ip_to_location_seed
		Geocoder.search(Faker::Internet.ip_v4_address).first.data
	end
end