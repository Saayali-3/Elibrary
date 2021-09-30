package com.techgeeknext.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.techgeeknext.message.ResponseMessage;
import com.techgeeknext.model.ConfirmationToken;
import com.techgeeknext.model.UserEntity;
import com.techgeeknext.repository.ConfirmationTokenRepository;
import com.techgeeknext.repository.UserRepo;
import com.techgeeknext.service.EmailService;

@RestController
@CrossOrigin
@Controller
public class UserAccountController {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

    @Autowired
    private EmailService emailService;

    
    
    @RequestMapping(value="/emailregister", method = RequestMethod.POST)
    public ResponseEntity<ResponseMessage> registerUser(@RequestBody  UserEntity userEntity)
    {
    	 String message = "";
    	UserEntity existingUser = userRepo.findByEmailIgnoreCase(userEntity.getEmail());
        if(existingUser != null)
        {
        	 message ="This email already exists!";
        	 return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            //modelAndView.addObject("message","This email already exists!");
          //  modelAndView.setViewName("error");
        }
        else
        {
            userRepo.save(userEntity);

            ConfirmationToken confirmationToken = new ConfirmationToken(userEntity);

            confirmationTokenRepository.save(confirmationToken);

            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(userEntity.getEmail());
            mailMessage.setSubject("Complete Registration!");
            mailMessage.setText("To confirm your account, please click here : "
            +"http://localhost:3000/confirm-account?token="+confirmationToken.getConfirmationToken());

            emailService.sendEmail(mailMessage);
            message ="Please check your email box!";
       	 return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
         //   modelAndView.addObject("emailId", userEntity.getEmail());

          //  modelAndView.setViewName("successfulRegisteration");
        }

     //   return modelAndView;
    }
    

    @RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
    public ResponseEntity<ResponseMessage> confirmUserAccount(@RequestParam("token")String confirmationToken)
    {
    	String message="";
        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

        if(token != null)
        {
        	
        	UserEntity user = userRepo.findByEmailIgnoreCase(token.getUserEntity().getEmail());
            user.setEnabled(true);
            userRepo.save(user);
            message ="Congratulations! Your account has been activated and email is verified!";
          	 return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
           // modelAndView.setViewName("accountVerified");
        }
        else
        {
        	 message ="The link is invalid or broken!";
          	 return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
       //     modelAndView.addObject("message","The link is invalid or broken!");
  //          modelAndView.setViewName("error");
        }

   //     return modelAndView;
    }
}
