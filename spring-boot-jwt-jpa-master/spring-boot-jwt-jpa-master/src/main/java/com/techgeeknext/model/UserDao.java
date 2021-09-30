package com.techgeeknext.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class UserDao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Column
    private String username;
	
	@Column
    private long phonenumber;
	
	public long getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(long phonenumber) {
		this.phonenumber = phonenumber;
	}

	@Column
    private String user_type;
	
	public String getUser_type() {
		return user_type;
	}

	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}

	

	@Column
    private String member_type;


	@Column
    private Date member_validity;
	
    public String getMember_type() {
		return member_type;
	}

	public void setMember_type(String member_type) {
		this.member_type = member_type;
	}

	public Date getMember_validity() {
		return member_validity;
	}

	public void setMember_validity(Date member_validity) {
		this.member_validity = member_validity;
	}

	@Column
    @JsonIgnore
    private String password;

    private boolean isEnabled;
    @Column
    private String email;
    public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
        return username;
    }
	public boolean isEnabled() {
		return isEnabled;
	}

	public void setEnabled(boolean isEnabled) {
		this.isEnabled = isEnabled;
	}
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}

