package com.techgeeknext.service;

import com.techgeeknext.model.UserDao;
import com.techgeeknext.model.UserDto;
import com.techgeeknext.model.UserEntity;
import com.techgeeknext.repository.UserRepo;
import com.techgeeknext.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepository userDao;
    private UserRepo userRepo;
	@Autowired
	private PasswordEncoder bcryptEncoder;

	public List<UserDao> getAllUser() {
		
		return (List<UserDao>)userDao.findAll();
	}
	
public UserDao getById(long id) {		
	UserDao user=userDao.findById(id).get();
		return user;
	}


	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserDao user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}

	public UserDao save(UserDto user) {
		UserDao newUser = new UserDao();
		System.out.println(user.getPassword());
		if(user.getPassword()==null) {
			newUser.setUsername(user.getUsername());
			newUser.setEmail(user.getEmail());
			newUser.setEnabled(user.isEnabled());
			newUser.setId(user.getId());
			newUser.setMember_type(user.getMember_type());
			newUser.setMember_validity(user.getMember_validity());
			newUser.setUser_type(user.getUser_type());
			newUser.setPhonenumber(user.getPhonenumber());	
			newUser.setPassword(loadUserByUsername(user.getUsername()).getPassword());
			System.out.println(user.getPassword());
			}else {
			newUser.setUsername(user.getUsername());
			newUser.setEmail(user.getEmail());
			newUser.setEnabled(user.isEnabled());
			newUser.setId(user.getId());
			newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
			newUser.setMember_type(user.getMember_type());
			newUser.setMember_validity(user.getMember_validity());
			newUser.setUser_type(user.getUser_type());
			newUser.setPhonenumber(user.getPhonenumber());	
		}
	System.out.println(userDao.save(newUser));
		return userDao.save(newUser);
	}
	
	public UserEntity save(UserEntity user) {
		UserEntity newUser = new UserEntity();
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		newUser.setEmail(user.getEmail());
		return userRepo.save(newUser);
	}


}