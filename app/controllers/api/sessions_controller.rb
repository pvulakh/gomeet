class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login(@user)
            render 'api/users/show';
        else  
            render json: ["Your email or password was entered incorrectly."], status: 401
        end
    end 

    def destroy
        logout
        render json: ["Logged out!"], status: 200
    end 
end 