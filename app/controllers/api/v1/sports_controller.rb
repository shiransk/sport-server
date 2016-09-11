class Api::V1::SportsController < ApplicationController

  def index
    @sports = Sport.all
    render json: @sports 
  end

  def show 
    @sport = Sport.find_by(id: params[:id])
    render json: @sport
  end

  def create
    @sport = Sport.new(name: params[:name], ball: params[:ball], age: params[:age])
    if @sport.save
      render json: @sport
    else 
      render json: {errors: @sport.errors.full_messages}, status: 422
    end
  end
 
  def destroy
    sport = Sport.find_by(id: params[:id])
    sport.destroy
    render json: {message: "Sport Deleted"}
  end

end

