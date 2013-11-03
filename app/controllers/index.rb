enable :sessions

get '/' do
  session[:current_ip] = request.ip
  @viewers    = Viewer.all
  # @current_viewer = create_viewer
  # erb :map_form
  erb :layout
end

get '*' do
  redirect '/'
end