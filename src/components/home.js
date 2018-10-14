import React from 'react';
import Navbar from './navbar'

class Home extends React.Component {
    render() { return (
        <>
            <Navbar />
            <div className="container content-container">
                <div className="row">
                    <div className="col-sm">
                    One of three columns
                    </div>
                    <div className="col-sm">
                    One of three columns
                    </div>
                    <div className="col-sm">
                    One of three columns
                    </div>
                </div>
            </div>
                
            
        </>
    
    );}
}

export default Home;