class TicketsController < ApplicationController
    def index
        tickets = Ticket.all
        render json: tickets, status: :ok
    end

    def show
        show_ticket = Ticket.find_by!(id: params[:id])
        render json: show_ticket, status: :ok
    end

    def create 
        create_ticket = Ticket.create!(employee_ticket_params)
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

    def complete 
        tickets = Ticket.all.filter{|ticket| ticket.complete}.sort_by{|ticket| ticket.severity_level}.reverse
        render json: tickets, status: :ok
    end

    private

    def ticket_params
        params.permit(:solution, :complete, :subject, :issue, :case_category)
    end

    def employee_ticket_params
        params.permit(:admin_id, :employee_id, :subject,:rental_id, :level, :severity_level, :issue, :solution, :complete,:case_number, :case_category)
    end

end
