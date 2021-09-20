package com.techgeeknext.model;

import java.io.Serializable;

public class JwtRequest implements Serializable {

	private static final long serialVersionUID = 5926468583005150707L;
	
	private String emailId;
	private String password;
	
	//default constructor for JSON Parsing
	public JwtRequest()
	{
	}

	public JwtRequest(String username, String password) {
		this.setEmailId(username);
		this.setPassword(password);
	}


	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
}