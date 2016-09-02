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
    @sport.save
    render json: @sport
  end
 
  def destroy
    sport = Sport.find_by(id: params[:id])
    sport.destroy
    render json: {message: "Sport Deleted"}
  end

end
