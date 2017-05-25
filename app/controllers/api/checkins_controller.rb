class Api::CheckinsController < ApplicationController
  def show
    @checkin = Checkin.find_by(id: params[:id])
  end

  def index
    user_id = params[:user_id]
    drink_id = params[:drink_id]
    pos = params[:pos]
    if user_id
      user = User.includes(:checkins).find_by(id: user_id)
      @checkins = user.checkins
        .includes(:brewery, :drink)
        .limit(10)
        .offset(pos)
        .order('id DESC')
    elsif drink_id
      drink = Drink.includes(:checkins).find_by(id: drink_id)
      @checkins = drink.checkins
        .includes(:brewery, :drink, :user)
        .limit(10)
        .offset(pos)
        .order('id DESC')
    else
      @checkins = Checkin
        .includes(:user, :drink)
        .all
        .limit(10)
        .offset(pos)
        .order('id DESC')
    end
  end

  def create
    @checkin = Checkin.new(checkin_params)
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
