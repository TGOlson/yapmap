class Viewer < ActiveRecord::Base
    # scope :already_logged?, -> { where("ip_address = session[:ip]") } --> test scoping, might need .exist?
end
