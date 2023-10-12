package project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import project.model.Model;
import project.service.MainService;

@RestController
@CrossOrigin("*")
public class Controller {

	@Autowired
	MainService service;

	@GetMapping("/")
	public String a() {
		return "welcome";
	}

	@PostMapping("/login")
	public boolean login(@RequestBody Model m) {
		return service.login(m);
	}

	@PostMapping("/signup")
	public boolean signup(@RequestBody Model m) {
		return service.signup(m);
	}
	
	@PutMapping("/forgotpwd")
	public boolean forgotpwd(@RequestBody Model m) {
		return service.forgotpwd(m);
	}

}
