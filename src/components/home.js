import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <div className="container content-container">
          <div className="row">
            <div className="col-sm py-2">
              <h1>Experience</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
                neque? Nemo quas blanditiis id, odio corporis labore ad eos
                mollitia nostrum sequi, molestiae soluta eligendi. Error et ut
                inventore eaque harum obcaecati atque repudiandae ullam? Ducimus
                sed cum perferendis exercitationem.
              </p>
            </div>
            <div className="col-sm py-2">
              <h1>Trust</h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus, veniam odit, voluptates libero obcaecati a quod
              consectetur tempore minima ad adipisci repellendus magnam nihil,
              recusandae possimus at commodi. Facilis amet reprehenderit sint
              numquam porro aliquam iste dolorum non consectetur exercitationem.
            </div>
            <div className="col-sm py-2">
              <h1>Value</h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quod ea facilis ex, quae unde repellendus, dolorum nemo
              asperiores tempora libero sunt adipisci quaerat rem laudantium
              mollitia similique nobis nesciunt perferendis? Nostrum suscipit
              laboriosam corrupti quibusdam modi, ab est fugiat?
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
