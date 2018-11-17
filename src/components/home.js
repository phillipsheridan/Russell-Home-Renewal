import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";

class Home extends React.Component {
  componentDidMount() {
    // console.log("HOME mounted!");
    document.getElementById("root").scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header />
        <div className="container content-container">
          <div className="row home-text">
            <div className="col-sm py-2">
              <h1>What we do</h1>
              <hr />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
                neque? Nemo quas blanditiis id, odio corporis labore ad eos
                mollitia nostrum sequi, molestiae soluta eligendi. Error et ut
                inventore eaque harum obcaecati atque repudiandae ullam? Ducimus
                sed cum perferendis exercitationem.
              </p>
            </div>
            <div className="col-sm py-2">
              <h1>Where we operate</h1>
              <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur quod ea facilis ex, quae unde repellendus, dolorum
                nemo asperiores tempora libero sunt adipisci quaerat rem
                laudantium mollitia similique nobis nesciunt perferendis?
                Nostrum suscipit laboriosam corrupti quibusdam modi, ab est
                fugiat?
              </p>
            </div>
            <div className="col-sm py-2">
              <h1>Why you should hire us</h1>
              <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur quod ea facilis ex, quae unde repellendus, dolorum
                nemo asperiores tempora libero sunt adipisci quaerat rem
                laudantium mollitia similique nobis nesciunt perferendis?
                Nostrum suscipit laboriosam corrupti quibusdam modi, ab est
                fugiat?
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
