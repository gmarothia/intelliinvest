package com.core.backbone.employees.beans;


public class Employee {
	
	Long id;
	String name;
	String dateOfJoining;
	public Employee(){}
	public Employee(Long id, String name, String date){
		this.id = id;
		this.name = name;
		this.dateOfJoining = date;
		
		
	}
	

	
	public String getDateOfJoining() {
		return dateOfJoining;
	}
	public void setDateOfJoining(String dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	

}
