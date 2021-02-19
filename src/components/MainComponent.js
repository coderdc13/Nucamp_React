import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};



class Main extends Component {
  /*  constructor(props) {
        super(props);
        this.props = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS

        };
    }

    */

    render() {

        const HomePage = () => {
            return (
                <Home 
                campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                
                />
            );
        };


        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        };    


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                   <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />

                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />

                    <Route exact path='/contactus' component={Contact} />

                   <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} />


                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));


// As with all other assignments, 99.999% of this work came directly from Instructor HE and also Nucamp tutorials... In particular with this assignment, student author (that's me, Franklin Bueno) worked from the collaboration with fellow students DM and AP and also worked from the suggestions of Instructor HE... Also, Instructor HE bailed out the student author and had the student author change this.props.partners to this.state.partners in line 66 in the MainComponent file...