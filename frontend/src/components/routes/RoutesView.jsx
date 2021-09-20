import React from "react";
import { Switch, Route } from "react-router-dom";
import {

  SignupFormContainer,
  UserContainer,
  LoginFormContainer,
  
  
} from "../containers";
import { VerificationView,
  ConfirmAccountView,HomePageView } from "../views";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/verification" component={VerificationView} />
      <Route exact path="/home" component={HomePageView} />
      <Route exact path="/confirm-account" component={ConfirmAccountView} />
    
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/users/:id" component={UserContainer} />
    
    </Switch>
  );
};

export default RoutesView;
