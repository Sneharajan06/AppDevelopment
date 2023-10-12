package project.entity;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity {

	public int getId() {
		return id;
	}

	public UserEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserEntity(int id, String email, String password, String name, String role, String mobile) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.role = role;
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		return "UserEntity [id=" + id + ", email=" + email + ", password=" + password + ", name=" + name + ", role="
				+ role + ", mobile=" + mobile + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(email, id, mobile, name, password, role);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserEntity other = (UserEntity) obj;
		return Objects.equals(email, other.email) && id == other.id && Objects.equals(mobile, other.mobile)
				&& Objects.equals(name, other.name) && Objects.equals(password, other.password)
				&& Objects.equals(role, other.role);
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "email")
	private String email;

	@Column(name = "password")
	private String password;

	@Column(name = "name")
	private String name;

	@Column(name = "role")
	private String role;

	@Column(name = "mobile")
	private String mobile;
	
	
	
//	parking
//	
	
	
	private String numberplate;	
	private String entrydate;	
	private String exitdate;
	private int userid;
	private String owner;
	private String vehicle;
	

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getVehicle() {
		return vehicle;
	}

	public void setVehicle(String vehicle) {
		this.vehicle = vehicle;
	}

	public String getNumberplate() {
		return numberplate;
	}

	public void setNumberplate(String numberplate) {
		this.numberplate = numberplate;
	}

	public String getEntrydate() {
		return entrydate;
	}

	public void setEntrydate(String entrydate) {
		this.entrydate = entrydate;
	}

	public String getExitdate() {
		return exitdate;
	}

	public void setExitdate(String exitdate) {
		this.exitdate = exitdate;
	}

	
//	
//	visitor
	
	
	private String visitorname;
	public String getVisitorname() {
		return visitorname;
	}

	public void setVisitorname(String visitorname) {
		this.visitorname = visitorname;
	}

	public String getVisitoralias() {
		return visitoralias;
	}

	public void setVisitoralias(String visitoralias) {
		this.visitoralias = visitoralias;
	}

	public String getVisitornumber() {
		return visitornumber;
	}

	public void setVisitornumber(String visitornumber) {
		this.visitornumber = visitornumber;
	}

	public String getVisitingdate() {
		return visitingdate;
	}

	public void setVisitingdate(String visitingdate) {
		this.visitingdate = visitingdate;
	}

	public String getVisitorentry() {
		return visitorentry;
	}

	public void setVisitorentry(String visitorentry) {
		this.visitorentry = visitorentry;
	}

	public String getVisitorexit() {
		return visitorexit;
	}

	public void setVisitorexit(String visitorexit) {
		this.visitorexit = visitorexit;
	}

	private String visitoralias;
	private String visitornumber;
	private String visitingdate;
	private String visitorentry;
	private String visitorexit;



	
	
	
}
