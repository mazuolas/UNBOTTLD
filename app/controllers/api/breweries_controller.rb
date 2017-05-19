class Api::BreweriesController < ApplicationController
  def create

    @brewery = Brewery.find_by(name: params[:name])
    unless @brewery
      @brewery = Brewery.create(name: params[:name], image_url: 'none', location: 'none')
    end
  end
end
