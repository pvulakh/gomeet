class Api::MessagesController < ApplicationController
  def create 
    @message = Message.new(message_params)
    if @message.save 
      render :show 
    else  
      render json @message.errors.full_messages, status: 422 
    end 
  end 

  def update 
    @message = current_user.messages.find_by(id: params[:id])
    if @message.update_attributes(message_params)
      render :show 
    else  
      render json: @message.errors.full_messages, status: 422 
    end 
  end 

  def destroy 
    @message = current_user.messages.find_by(id: params[:id])
    @message.destroy! if @message
    render json: ["success!"]
  end 

  private 
  def message_params 
    params.require(:message).permit(:body, :dm_id)
  end 
end 