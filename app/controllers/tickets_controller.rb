class TicketsController < ApplicationController
    def index
        tickets = Ticket.all.sort_by{|ticket| ticket.severity_level}.reverse
        render json: tickets, status: :ok
    end

    def show
        show_ticket = Ticket.find_by!(id: params[:id])
        render json: show_ticket, status: :ok
    end

    def create 
        create_ticket = Ticket.create!(ticket_params)
        render json: create_ticket, status: :created
    end

    def update 
        update_ticket = Ticket.find_by!(id: params[:id])
        update_ticket.update(ticket_params)
        render json: update_ticket, status: :accepted
    end

    def destroy
        destroy_ticket = Ticket.find_by!(id: params[:id])
        destroy_ticket.destroy
        render json: {}, status: :accepted
    end

    def incomplete 
        tickets = Ticket.all.filter{|ticket| !ticket.complete}.sort_by{|ticket| ticket.severity_level}.reverse
        render json: tickets, status: :ok
    end

    private

    def ticket_params
        params.permit(:solution, :complete)
    end

end
