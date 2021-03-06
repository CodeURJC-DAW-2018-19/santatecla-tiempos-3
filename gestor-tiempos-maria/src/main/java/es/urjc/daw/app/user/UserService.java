package es.urjc.daw.app.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserService {
	@Autowired
	private UserRepository repository;

	public User findOne(String name) {
		return repository.findByEmail(name);
	}
	public User findOneById(long id) {
		return repository.findOneById(id);
	}
	public List<User> findAll() {
		return repository.findAll();
	}

	public void save(User user) {
		repository.save(user);
	}

	public void delete(long id) {
		repository.deleteById(id);
	}
}
