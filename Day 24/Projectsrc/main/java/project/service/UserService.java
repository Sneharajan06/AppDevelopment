package project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import project.Repository.UserRepository;
import project.entity.UserEntity;

@Service
@Transactional
public class UserService {

	@Autowired
	UserRepository repo;

	public void signup(UserEntity e) {
		repo.signup(e.getEmail(), e.getMobile(), e.getName(), e.getPassword(), e.getRole());
	}

	public boolean login(String name, String password) {
		String s = repo.login(name, password);
		return s != null;
	}

	public boolean forgotpwd(UserEntity e) {
		repo.forgotpwd(e.getName(), e.getPassword());
		System.out.println(e.getName() + " " + e.getPassword());
		return true;
	}

	public String profile(String string, String string2) {

		return repo.profile(string, string2);
	}

	public void parking(UserEntity e, int id) {
		repo.parking(e.getEntrydate(), e.getExitdate(), e.getNumberplate(), e.getOwner(), id, e.getVehicle());

	}

	public void visitor(UserEntity e, int id) {
		repo.visitor(id, e.getVisitingdate(), e.getVisitoralias(), e.getVisitorentry(), e.getVisitorexit(),
				e.getVisitorname(), e.getVisitornumber());

	}

	public String dashboard() {
		return repo.dashboard();
	}

	public List<String> adminVisitor() {
		return repo.adminVisitor();
	}

	public List<String> adminParking() {
	
		return repo.adminParking();
	}

	public List<String> getAllUsers() {
		
		return repo.getAllUsers();
	}

}
