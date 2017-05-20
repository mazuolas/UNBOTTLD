class Api::CheckinsController < ApplicationController
  def show
    @checkin = Checkin.find_by(id: params[:id])
  end

  def index
    user_id = params[:user_id]
    drink_id = params[:drink_id]

    if user_id
      user = User.find_by(id: user_id).includes(:checkins).includes(:drink, :user)
      @checkins = user.checkins
    elsif drink_id
      drink = Drink.find_by(id: drink_id).includes(:checkins).includes(:drink, :user)
      @checkins = drink.checkins
    else
      @checkins = Checkin.all.includes(:user, :drink)
    end
  end

  def create
    @Checkin.new(checkin_params)
    if @checkin.save
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def destroy
    @checkin = Checkin.find_by(id: params[:id])
    if current_user && current_user.id == @checkin.user_id
      @checkin.destroy
      render :show
    else
      render json: ["can only delete your checkins"], status: 422
    end
  end

  private

  def checkin_params
    params.require(:checkin).permit(:rating, :comment, :image_url, :user_id, :drink_id)
  end


end
