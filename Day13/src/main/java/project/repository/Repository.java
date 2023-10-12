package project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import jakarta.transaction.Transactional;
import project.model.Model;

public interface Repository extends JpaRepositoryImplementation<Model, Long> {

	@Modifying
	@Transactional
	@Query(value = "insert into users (email,mobile,name,password,role) values (?1,?2,?3,?4,?5)", nativeQuery = true)
	void signup(String email, String mobile, String name, String passsword, String role);

	@Query(value = "select name,password FROM users e WHERE e.name = ?1 and e.password=?2 limit 1", nativeQuery = true)
	String login(String name, String password);

	@Modifying
	@Transactional
	@Query(value = "update  users set password=:password where email=:email", nativeQuery = true)
	void forgotpwd(String email, String password);

}
