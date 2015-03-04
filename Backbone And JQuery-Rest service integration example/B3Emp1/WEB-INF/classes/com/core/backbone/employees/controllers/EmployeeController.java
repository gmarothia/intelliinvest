package com.core.backbone.employees.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.core.backbone.employees.beans.Employee;
import com.core.backbone.employees.ds.EmployeeDS;



@Controller
public class EmployeeController {

	@Autowired
	private EmployeeDS employeeDS;
	
	public void setemployeeDS(EmployeeDS ds) {
		this.employeeDS = ds;
	}
	
		
	@RequestMapping(method=RequestMethod.GET, value="/employees/{id}")
	public @ResponseBody Employee getTask(@PathVariable String id) {
		Employee e = employeeDS.get(Long.parseLong(id));
		return e;
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/employees/{id}")
	public @ResponseBody Employee updateTask(@RequestBody Employee e) {
		
		
		employeeDS.update(e);
		return e;
		
	
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/employees")
	public @ResponseBody Employee addTask(@RequestBody Employee e) {
		long id = EmployeeDS.employees.size()+1;
		e.setId(id);
		employeeDS.add(e);
		return e;
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/employees/{id}")
	public @ResponseBody long removeTask(@PathVariable String id) {
		employeeDS.remove(Long.parseLong(id));
		return 0;
		
		
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/employees")
	public @ResponseBody List<Employee> getTasks() {
		List<Employee> Tasks = employeeDS.getAll();
		return Tasks;
		
	}
	
}
