package project.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Claims;
import project.entity.UserEntity;
import project.service.UserService;
import project.util.CookieExtractor;
import project.util.JwtUtil;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

	@Autowired
	UserService user;

	private final JwtUtil jwtUtil = new JwtUtil();

	@GetMapping("/")
	public String a() {
		return "welcome";
	}

	@PostMapping("/signup")
	public boolean signup(@RequestBody UserEntity e) {
		user.signup(e);
		return true;
	}

	@PostMapping("/login")
	public String login(@RequestBody UserEntity e) {
		String token = jwtUtil.generateToken(e.getName(), e.getPassword());
		System.out.println(token);
		Claims a = jwtUtil.extract(token);
		System.out.println(a);
		if (user.login(e.getName(), e.getPassword())) {
			return token;
		}
		return "0";
	}

	@PutMapping("/forgotpwd")
	public boolean forgot(@RequestBody UserEntity e) {
		return user.forgotpwd(e);
	}

	@GetMapping("/profile")
	public String profile(@RequestParam("token") String token) {
		String t = "";
		try {
			t = (String) jwtUtil.extract(token).get("sub");
		} catch (Exception e) {
			return "0";
		}

		return user.profile("" + t.split(";")[0], "" + t.split(";")[1]);
	}

	@PostMapping("/parking")
	public String parking(@RequestParam("token") String token, @RequestBody UserEntity e) {
		String t = "";
		int id = -1;
		try {
			t = (String) jwtUtil.extract(token).get("sub");
		} catch (Exception ex) {
			return "0";
		}
		String s = user.profile("" + t.split(";")[0], "" + t.split(";")[1]);
		id = Integer.parseInt(s.split(",")[0]);
		System.out.println(id + " id");

		user.parking(e, id);
		return "added";
	}

	@PostMapping("/visitor")
	public String visitor(@RequestParam("token") String token, @RequestBody UserEntity e) {
		String t = "";
		int id = -1;
		try {
			t = (String) jwtUtil.extract(token).get("sub");
		} catch (Exception ex) {
			return "0";
		}
		String s = user.profile("" + t.split(";")[0], "" + t.split(";")[1]);
		id = Integer.parseInt(s.split(",")[0]);
		System.out.println(id + " id");

		user.visitor(e, id);
		return "added";
	}

	@GetMapping("/dashboard")
	public String dashboard(@RequestParam("token") String token) {
		String t = "";
		int id = -1;
		try {
			t = (String) jwtUtil.extract(token).get("sub");
		} catch (Exception ex) {
			return "0";
		}
		return user.dashboard();
	}

	@GetMapping("/admin-visitor")
	public List<String> adminVisitor(@RequestParam("token") String token) {

		String t = "";
		int id = -1;
		try {
			t = (String) jwtUtil.extract(token).get("sub");
		} catch (Exception ex) {
			return null;
		}

		return user.adminVisitor();
	}

	@GetMapping("/admin-parking")
	public List<String> adminParking(@RequestParam("token") String token) {

		String t = "";
		int id = -1;
		try {
			t = (String) jwtUtil.extract(token).get("sub");
		} catch (Exception ex) {
			return null;
		}

		return user.adminParking();
	}

	@GetMapping("/dashboard-get-users")
	public List<String> dashboard_get_users(@RequestParam("token") String token) {

		String t = "";
		int id = -1;
		try {
			t = (String) jwtUtil.extract(token).get("sub");
		} catch (Exception ex) {
			return null;
		}

		return user.getAllUsers();
	}

}
