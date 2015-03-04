package com.core.backbone.employees.ds;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.core.backbone.employees.beans.Employee;





public class EmployeeDS {
	public static Map<Long, Employee> employees;
	static {
		employees = new HashMap<Long, Employee>();
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		Date date = new Date();
		String sDate= sdf.format(date);
		Employee e1 = new Employee(new Long(1), "Frank Smith", sDate);
		Employee e2 = new Employee(new Long(2), "John Doe", sDate);
		employees.put(e1.getId(), e1);
		employees.put(e2.getId(), e2);
	}
	
	public void add(Employee e) {
		
		employees.put(e.getId(), e);
	}

	public Employee get(long id) {
		return employees.get(id);
	}

	public List<Employee> getAll() {
		List<Employee> Tasks = new ArrayList<Employee>();
		for( Iterator<Employee> it = employees.values().iterator(); it.hasNext(); ) {
			Employee e = it.next();
			Tasks.add(e);
		}
		return Tasks;
	}

	public void remove(long id) {
		employees.remove(id);
	}

	public void update(Employee e) {
		employees.put(e.getId(), e);
	}

}
