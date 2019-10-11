class Api::DmsController < ApplicationController
  def create 
    @dm = Dm.new(dm_params)
    if @dm.save 
      render :show 
    else  
      render json: @dm.errors.full_messages, status: 422
    end 
  end 

  def show 
    @dm = Dm.find_by(id: params[:id])
    if @dm 
      render :show 
    else  
      render json: ['no dm found'], status: 404 
    end 
  end
  
  private 
  def dm_params
    params.require(:dm).permit(:dmee_id, :dmer_id)
  end 
end 