class Api::EventsController < ApplicationController 
  def index
    if (params[:group_id])
      @events = Group.find(params[:group_id]).events
    else 
      @events = Event.all
    end 

    render :index
  end 

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id 
    @event.group_id = params[:group_id]
    if @event.save
      render :show
    else  
      render json: @event.errors.full_messages, status: 401
    end
  end 

  def show
    @event = Event.find(params[:id])
  end 

  def update
    @event = Event.find(params[:id])
    if (@event.host_id == current_user.id) && @event.update(event_params)
      render :show 
    else  
      render json: @event.errors.full_messages, status: 401
    end 
  end 

  def destroy 
    event = Event.find(params[:id])
    @group = Group.find(event.group_id)
    event.delete if event.host_id == current_user.id 
    render 'api/groups/show', group: @group
  end 

  private
  def event_params
    params.require(:event).permit(:name, :start_time, :end_time, :description, :lat, :lng)
  end   
end