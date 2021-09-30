import React from 'react';

import { connect } from "react-redux";
class HomePage extends React.Component{
    componentDidMount() {
        //this.props.fetchNewestTen();
      }
    
      render() {
            return (
                <div className="center">
                <div className="text-center">
                    <h1> Welcome to Book Store</h1>
                    </div>
                    </div>
                )
        }
    
    }
    const mapState = (state) => {
    return {
      user: state.user
     
    };
    };
    
    
    

export default connect(mapState)( HomePage);

