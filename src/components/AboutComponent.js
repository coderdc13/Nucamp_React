/*
Update MainComponent to integrate the AboutComponent into the single page application. 
At the end of Task 1, you should be able to navigate to it by clicking on both the navigation bar and the footer. (You do not need to update the Header or Footer components for this - you should only need to update MainComponent.js.)
Your About Us page should look like this (if you scroll down):
*/

/*
Task 1/3, Point 1/4 - Download AboutComponent.js and put it in the components folder. Completed...

*/

import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';




    // Task 2/3, Point 1/4  Below... Also, Task 2/3, Point 2/4
    // Task 2/3 Point 3/4 Below...
    function RenderPartner({ partner }){
        if (partner) {
            return(
                    <React.Fragment>
                        <Media object src={partner.image} alt={partner.name} width='150' />
                        <Media body className='ml-5 mb-4'>
                            <Media heading>
                                    {partner.name}
                            </Media>
                            {partner.description}
                        </Media>
                    </React.Fragment>
            );
        } else return(
            (<div></div>)
        );
    }


    function About(props) {
        //Below Task 3/3 ...
            const partners = props.partners.map(partner => {
                
                return (
                    <Media key={partner.id} tag='li'>
                        <RenderPartner partner={partner} />
                    </Media>
             
                );
                /*
               return (
                   <h5>
                       {partner.name}
                   </h5>
               )
               */
            });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>Here at PythonABC.org, we wish to share the knowledge about Python programming for artificial intelligence (AI), blockchain technology, and comprehensive data science. Also, we are aiming to expand to decentralized finance (DeFi) applications.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 20, 2021</dd>
                                <dt className="col-6">Desired Number of Visitors in 2021</dt>
                                <dd className="col-6">10,000</dd>
                                <dt className="col-6">Desired of Reviews in 2021</dt>
                                <dd className="col-6">10,000</dd>
                                <dt className="col-6">Current Number of Topics</dt>
                                <dd className="col-6">Three</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">The best way to predict the future is to invent it.</p>
                                <footer className="blockquote-footer">Alan Kay, PhD,{' '}
                                    <cite title="Source Title"><a href="https://quoteinvestigator.com/tag/alan-kay/">https://quoteinvestigator.com/tag/alan-kay/</a></cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Partnerships in Development</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;

// As with all other assignments, 99.999% of this work came directly from Instructor HE and also Nucamp tutorials... In particular with this assignment, student author (that's me, Franklin Bueno) worked from the collaboration with fellow students DM and AP and also worked from the suggestions of Instructor HE... Also, Instructor HE bailed out the student author and had the student author change this.props.partners to this.state.partners in line 66 in the MainComponent file...
