class AdminsController < ApplicationController
    def index
        admins = Admin.all
        render json: admins, status: :ok
    end

    def show
        show_admin = Admin.find_by!(id: params[:id])
        render json: show_admin, status: :ok
    end

    def create 
        create_admin = Admin.create!(admin_params)
        render json: create_admin, status: :created
    end

    def update 
        update_admin = Admin.find_by!(id: params[:id])
        update_admin.update(admin_params)
        render json: update_admin, status: :accpeted
    end

    def destroy
        destroy_admin = Admin.find_by!(id: params[:id])
        destroy_admin.destroy
        render json: {}, status: :accepted
    end

    private

    def admin_params
        params.permit(:name)
    end

end
