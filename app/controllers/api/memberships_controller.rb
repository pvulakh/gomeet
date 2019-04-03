class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new
    @membership.user_id = current_user.id
    @group = Group.find(params[:group_id]) 
    @membership.group_id = @group.id
    if @membership.save
      render "api/groups/show", group: @group
    else  
      render json: @membership.errors.full_messages, status: 401
    end 
  end 

  def destroy 
    membership = current_user.memberships.find_by(group_id: params[:group_id])
    @group = Group.find(params[:group_id])
    membership.delete
    render "api/groups/show", group: @group
  end 
end 