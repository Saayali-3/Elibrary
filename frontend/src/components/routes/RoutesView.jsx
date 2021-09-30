import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  NavBarContainer,
  SignupFormContainer,
  UserContainer,
  LoginFormContainer,
  AdminSignupContainer,
  AdminLoginContainer
} from "../containers";
import { VerificationView,
  ConfirmAccountView,HomePageView,NavBarView ,ApproveView,MembershipView} from "../views";


const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/verification" component={VerificationView} />
      <Route exact path="/home" component={HomePageView} />
      <Route exact path="/membership" component={MembershipView} />
      <Route exact path="/confirm-account" component={ConfirmAccountView} />
      <Route exact path="/approve" component={ApproveView} />
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/users/:id" component={UserContainer} />
      <Route exact path="/adminsignup" component={AdminSignupContainer} />
      <Route exact path="/admin" component={AdminLoginContainer} />
    
    
    </Switch>
  );
};

export default RoutesView;
