class Api::GroupsController < ApplicationController
  def index
    @groups = Group.all.includes(:events, :members).with_attached_photo
    render :index
  end 
  
  def create
    @group = Group.new(group_params)
    @group.creator_id = current_user.id
    if @group.save
      membership = Membership.new(user_id: current_user.id, group_id: @group.id);
      membership.save 
      render :show
    else  
      render json: @group.errors.full_messages, status: 401
    end 
  end 

  def show 
    @group = Group.find(params[:id])
  end 

  def update
    @group = Group.find(params[:id]).includes(:events, :members).with_attached_photo
    if (@group.creator_id == current_user.id) && @group.update(group_params)
      render :show
    else  
      render json: @group.errors.full_messages, status: 401
    end 
  end 

  def destroy
    group = Group.find(params[:id])
    group.delete if group.creator_id == current_user.id
    @groups = Group.all
    render :index
  end 

  private
  def group_params
    params.require(:group).permit(:title, :description, :public, :lat, :lng, :photo)
  end
end