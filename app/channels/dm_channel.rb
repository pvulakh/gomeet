class ChatChannel < ApplicationCable::Channel
  def subscribed
    @dm = Dm.find(params[:id])
    stream_from "dm_channel"
  end

  def speak(data)
    message = @dm.messages.new(body: data['message'])
    message.dm_id = @dm.id 
    message.author_id = current_user.id 
    if message.save! 
      socket = { message: message.to_json }
      DmChannel.broadcast_to('chat_channel', socket)
  end 

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
