class InventoriesController < ApplicationController
    def index
        inventorys = Inventory.all
        render json: inventorys, status: :ok
    end

    def show
        show_inventory = Inventory.find_by!(id: params[:id])
        render json: show_inventory, status: :ok
    end

    def create 
        create_inventory =Inventory.create!(inventory_params)
        render json: create_inventory, status: :created
    end

    def update 
        update_inventory = Inventory.find_by!(id: params[:id])
        update_inventory.update(inventory_params)
        render json: update_inventory, status: :accepted
    end

    def destroy
        destroy_inventory = Inventory.find_by!(id: params[:id])
        destroy_inventory.destroy
        render json: {}, status: :accepted
    end

    def inventory_params
        params.permit(:name, :cpu, :rent, :serial_number, :memory, :graphic_card)
    end
end
