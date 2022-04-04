class RentalsController < ApplicationController
    def index
        rentals = Rental.all
        render json: rentals, status: :ok
    end

    def show
        show_rental = Rental.find_by!(id: params[:id])
        render json: show_rental, status: :ok
    end

    def create 
        create_rental =Rental.create!(rental_params)
        render json: create_rental, status: :created
    end

    def update 
        update_rental = Rental.find_by!(id: params[:id])
        update_rental.update(rental_params)
        render json: update_rental, status: :accpeted
    end

    def destroy
        destroy_rental = Rental.find_by!(id: params[:id])
        destroy_rental.destroy
        render json: {}, status: :accepted
    end
end
