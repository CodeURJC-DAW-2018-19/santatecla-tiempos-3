package es.urjc.daw.app.api;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import es.urjc.daw.app.category.Category;
import es.urjc.daw.app.category.CategoryService;
import es.urjc.daw.app.event.Event;
import es.urjc.daw.app.interval.Interval;

@RestController
@RequestMapping("/api/categories")
public class CategoryRestController {
	@Autowired private CategoryService service;

	@GetMapping("/")
	public Collection<Category> getCategories() {

		return service.findAll();
	}
	@GetMapping("/get/{id}")
	public Category getCategoryrById(@PathVariable long id) {
		return service.findOne(id);
	}
	 
	@GetMapping("/get")
	public Category getCategoryByName(@RequestParam String name) {
		return service.findOneByName(name);
	}
   

	

	@GetMapping("/events/{id}")
	@ResponseStatus(HttpStatus.OK)
	public String[] getEvents(@PathVariable long id) {
		Category category = service.findOne(id);
		String[] names = new String[category.getEvents().size()];
		
		
		List<Event> mainList = new ArrayList<Event>();
		mainList.addAll(category.getEvents());
		for(int i=0;i<names.length;i++)
			names[i]=mainList.get(i).getName();
		
		return names;
	}
	@PostMapping("/create")
	@ResponseStatus(HttpStatus.CREATED)
	public void createNewCategory(@RequestBody Category categoy) {
		service.save(categoy);
	}
		
	/*@PostMapping("/set/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public void setCategoryById(@PathVariable long id, @RequestParam String name) {
		Category category = new Category(name);
	    category.setIdCategory(id);
	    service.save(category);
	}*/
	@PostMapping("/set/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public void setCategoryById(@PathVariable long id, @RequestBody Category category) {
	    category.setIdCategory(id);
	    service.save(category);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteCategoryById(@PathVariable long id){
		service.delete(id);
	}
} 
