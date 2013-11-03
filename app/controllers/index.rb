enable :sessions

get '/' do
  session[:current_ip] = request.ip
  @viewers    = Viewer.all.map{|v| [v.latitude, v.longitude] }
  # @current_viewer = create_viewer
  # erb :map_form
  erb :layout
end

get '*' do
  redirect '/'
end