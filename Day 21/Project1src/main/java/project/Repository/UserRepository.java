package project.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import jakarta.transaction.Transactional;
import project.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

	@Modifying
	@Transactional
	@Query(value = "insert into users (email,mobile,name,password,role,userid) values (?,?,?,?,?,0)", nativeQuery = true)

	void signup(String email, String mobile, String name, String password, String role);

	@Query(value = "select * from users where name=:name and password=:password limit 1", nativeQuery = true)
	String login(String name, String password);

	@Modifying
	@Transactional
	@Query(value = "update users set password = :password where name = :name", nativeQuery = true)
	void forgotpwd(String name, String password);

	@Query(value = "select * from users where name=:string and password=:string2 limit 1", nativeQuery = true)
	String profile(String string, String string2);

	@Modifying
	@Transactional
	@Query(value = "insert into parking (entrydate,exitdate,numberplate,owner,userid,vehicle) values(?1,?2,?3,?4,?5,?6)", nativeQuery = true)
	void parking(String entrydate, String exitdate, String numberplate, String owner, int userid, String vehicle);

	@Modifying
	@Transactional
	@Query(value = "insert into visitor (userid,visitingdate,visitoralias,visitorentry,visitorexit,visitorname,visitornumber) values(?1,?2,?3,?4,?5,?6,?7)", nativeQuery = true)
	void visitor(int id, String visitingdate, String visitoralias, String visitorentry, String visitorexit,
			String visitorname, String visitornumber);

	@Query(value = "select max(a.id),max(b.id),max(c.id) from users a,parking b,visitor c", nativeQuery = true)
	String dashboard();

	@Query(value = "select * from visitor", nativeQuery = true)
	List<String> adminVisitor();

	@Query(value = "select * from parking", nativeQuery = true)
	List<String> adminParking();

	@Query(value = "select email,mobile,name,role from users", nativeQuery = true)
	List<String> getAllUsers();

}
