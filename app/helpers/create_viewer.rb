require 'faker' #=> test only

helpers do

  COLORS = ['red', 'green', 'blue']

  def create_viewer
    session[:current_ip] = request.ip
    g = ip_to_location

    v = Viewer.new  ip_address:  g['ip'],
                    city:        g['city'],
                    region_name: g['region_name'],
                    zipcode:     g['zipcode'],
                    country:     g['country_name'],
                    latitude:    g['latitude'],
                    longitude:   g['longitude'],
                    dot_color:   COLORS.sample

    v.save unless bad_listing?(v); v
  end

  def bad_listing?(v)
    ( v.country.empty? || v.country == 'Reserved' ) ||
    ( v.city.empty? && v.region_name.empty?)
  end

  def ip_to_location
		Geocoder.search(session[:current_ip]).first.data
    # Geocoder.search(Faker::Internet.ip_v4_address).first.data #=> test setting
end

end

### GEOCODER format
# [#<Geocoder::Result::Freegeoip:0x871a98c @data={"ip"=>"83.52.123.238", 
   # "country_code"=>"ES", "country_name"=>"Spain", "region_code"=>"51", 
   # "region_name"=>"Andalucia", "city"=>"Sevilla", "zipcode"=>"", 
   # "latitude"=>37.3824, "longitude"=>-5.9761, "metro_code"=>"", "areacode"=>""}, @cache_hit=nil>] 
