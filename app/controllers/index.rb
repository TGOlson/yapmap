enable :sessions

get '/' do
  session[:current_ip] = request.ip
  p session
  @current_viewer = create_viewer
  @viewers    = Viewer.all.map{|v| [v.latitude, v.longitude] }
  erb :layout
end

get '*' do
  redirect '/'
end


### session hash
# {"session_id"=>"fc5a8e83355c6e17f8708d607d34ea5379cfc776096d535db6f7b3d1cda02a43", 
#  "tracking"=>{"HTTP_USER_AGENT"=>"2ee2c37f3bc1747d2dc6e63b2f672b740b8f12c6", 
#  "HTTP_ACCEPT_ENCODING"=>"ed2b3ca90a4e723402367a1d17c8b28392842398", 
#  "HTTP_ACCEPT_LANGUAGE"=>"66eae971492938c2dcc2fb1ddc8d7ec3196037da"}, 
#  "current_ip"=>"127.0.0.1", "csrf"=>"22fe34862e301103b06c480e13e30cb5"}

# add session id to table? so can do -> unless session_id?