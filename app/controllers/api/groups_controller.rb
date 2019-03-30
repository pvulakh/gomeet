class GroupsController < ApplicationController
  def index
    @groups = Group.all
    render :index
  end 
  
  def create
    @group = Group.new(group_params)
    @group.creator_id = current_user
    if @group.save
      render :show
    else  
      render json: @group.errors.full_messages, status: 401
    end 
  end 

  def show 
    @group = Group.find_by(params[:id])
  end 

  def update
    @group = Group.find_by(params[:id])
    redirect_to api_groups unless @group.creator_id == current_user.id
    if @group.update(group_params)
      render :show
    else  
      render json: @group.errors.full_messages, status: 401
    end 
  end 

  def destroy
    group = Group.find_by(params[:id])
    redirect_to api_groups unless group.creator_id == current_user.id
    group.delete
    redirect_to api_groups
  end 

  private
  def group_params
    params.require(:group).permit(:title, :description, :public, :lat, :lng)
  end
end