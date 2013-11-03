enable :sessions

get '/' do
  session[:current_ip] = request.ip
  @current_viewer = create_viewer
  @viewers    = Viewer.all.map{|v| [v.latitude, v.longitude] }
  erb :layout
end

get '*' do
  redirect '/'
end