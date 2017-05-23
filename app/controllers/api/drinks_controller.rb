class Api::DrinksController < ApplicationController
  def create
    @drink = Drink.new(drink_params)
    if @drink.save
      render :show
    else
      render json: @drink.errors.full_messages, status: 422
    end
  end

  def update
    find_drink
    if @drink && @drink.update(drink_params)
      render :show
    else
      render json: @drink.errors.full_messages, status: 422
    end
  end

  def edit
    find_drink
    render :show
  end

  def show
    find_drink
  end

  def index
    if params[:search] && params[:search] != ""
      @drinks = Drink.search_by_name(params[:search])
    else
      @drinks = Drink.all.includes(:brewery).limit(20).order('id DESC')
    end
  end

  def destroy
    @drink = Drink.find_by(id: params[:id])
    @drink.destroy
    render :show
  end

  private

  def drink_params
    params.require(:drink).permit(:name, :description, :image_url, :brewery_id, :abv, :average_rating)
  end

  def find_drink
    @drink = Drink.find_by(id: params[:id])
  end
end
