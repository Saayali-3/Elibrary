package com.techgeeknext.service;

import com.techgeeknext.model.UserDao;
import com.techgeeknext.model.UserEntity;
import com.techgeeknext.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepository userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserEntity user = userDao.findByEmailIdIgnoreCase(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getEmailId(), user.getPassword(),
				new ArrayList<>());
	}

	public UserEntity save(UserEntity user) {
		UserEntity newUser = new UserEntity();
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setEmailId(user.getEmailId());
		newUser.setUserid(user.getUserid());
		newUser.setEnabled(user.isEnabled());
		return userDao.save(newUser);
	}
}