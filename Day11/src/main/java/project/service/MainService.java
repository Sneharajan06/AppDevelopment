package project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.model.Model;
import project.repository.Repository;

@Service
public class MainService {

	@Autowired
	Repository repo;

	public boolean login(Model m) {
		if (repo.login(m.getName(), m.getPassword()) != null) {
			return true;
		}

		return false;
	}

	public boolean signup(Model m) {
		repo.signup(m.getEmail(), m.getMobile(), m.getName(), m.getPassword(), m.getRole());
		return true;
	}

	public boolean forgotpwd(Model m) {
		repo.forgotpwd(m.getEmail(), m.getPassword());
		return true;
	}

}
