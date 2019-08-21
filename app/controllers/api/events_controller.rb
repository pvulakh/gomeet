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
    
    start_date = params[:event][:startDate].split(' ')[0..3].join(' ')
    end_date = params[:event][:endDate].split(' ')[0..3].join(' ')
    @event.start_time = DateTime.parse(start_date + " #{params[:event][:startTime]}")
    @event.end_time = DateTime.parse(start_date + " #{params[:event][:endTime]}")
  
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
    params.require(:event).permit(:name, :description, :lat, :lng)
  end   
end 