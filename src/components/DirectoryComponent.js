import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {
  
    

           const directory = props.campsites.map((campsite) => {
                return (

                    <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite}  />

                    </div>
                );
            }

            );


            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Directory</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>Directory</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {directory}
                    </div>
                </div>
            );
    }


export default Directory;


/*
NB: most of this work was seen the workshop. Specifically, the student author paid attention when the classmates and Instructor shared their screens. Most of the work here (about 99.999%) is from other sources, which will be specified in later attempts/iterations of this assignment... Specifically, student author saw/experimented from the shared screens of Instructor HE and classmates (Mr. WC, Mr. SH, and Mr. AP)...
*/

