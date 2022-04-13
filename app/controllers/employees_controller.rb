class EmployeesController < ApplicationController
    def index
        employees = Employee.all
        render json: employees, status: :ok
    end

    def show
        show_employee = Employee.find_by!(id: params[:id])
        render json: show_employee, status: :ok
    end

    def create 
        create_employee = Employee.create!(employee_params)
        render json: create_employee, status: :created
    end

    def update 
        update_employee = Employee.find_by!(id: params[:id])
        update_employee.update(employee_params)
        render json: update_employee, status: :accepted
    end

    def destroy
        destroy_employee = Employee.find_by!(id: params[:id])
        destroy_employee.destroy
        render json: {}, status: :accepted
    end

    def employee_params
        params.permit(:name, :department, :position, :email, :extension)
    end
end
