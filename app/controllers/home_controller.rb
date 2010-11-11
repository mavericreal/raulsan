class HomeController < ApplicationController
  layout nil
  def index
    render :layout => "application"
  end
  
  def myWorld
    render "myWorld"
  end
  
  def environment
    render "environment"
  end
  
  def technology
    render "technology"
  end

  def blog
    redirect_to "http://blog."+request.host
  end
  
end
