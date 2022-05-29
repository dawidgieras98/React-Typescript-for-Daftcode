import React from "react";
import "./home.scss";
function Home() {
  return (
    <div className="wholeSystem">
      <h1>
        Cześć, właśnie trafiłeś na landing page... animacja może nie moja ale musiałem ją tutaj
        zamieścić, istne złoto! źródło:
      </h1>
      <a href="https://freefrontend.com/css-animation-examples/" target='_blank'>
        https://freefrontend.com/css-animation-examples/
      </a>
      <div className="bodySystem">
        <div className="system">
          <div className="system__orbit system__orbit--sun">
            <img
              src="https://www.dropbox.com/s/g02pto204mz1ywi/sun.png?raw=1"
              alt="Sun"
              className="system__icon system__icon--sun"
            />
          </div>

          <div className="system__orbit system__orbit--mercury">
            <div className="system__planet system__planet--mercury">
              <img
                src="https://www.dropbox.com/s/2o38602cmwhhdi1/mercury.png?raw=1"
                alt="Mercury"
              />
            </div>
          </div>
          <div className="system__orbit system__orbit--venus">
            <div className="system__planet system__planet--venus">
              <img src="https://www.dropbox.com/s/wvictuysutiirho/venus.png?raw=1" alt="Venus" />
            </div>
          </div>
          <div className="system__orbit system__orbit--earth">
            <div className="system__planet system__planet--earth">
              <img src="https://www.dropbox.com/s/ropzlyhb1v19l5t/earth.png?raw=1" alt="Earth" />
            </div>
          </div>
          <div className="system__orbit system__orbit--mars">
            <div className="system__planet system__planet--mars">
              <img src="https://www.dropbox.com/s/fa9biyj617n1q30/mars.png?raw=1" alt="Mars" />
            </div>
          </div>
          <div className="system__orbit system__orbit--jupiter">
            <div className="system__planet system__planet--jupiter">
              <img
                src="https://www.dropbox.com/s/d28oxi2c74zcoqk/jupiter.png?raw=1"
                alt="Jupiter"
              />
            </div>
          </div>
          <div className="system__orbit system__orbit--saturn">
            <div className="system__planet system__planet--saturn">
              <img src="https://www.dropbox.com/s/h8pj72v6mmaa0yq/saturn.png?raw=1" alt="Saturn" />
            </div>
          </div>
          <div className="system__orbit system__orbit--uranus">
            <div className="system__planet system__planet--uranus">
              <img src="https://www.dropbox.com/s/du6znsmfos2r4ry/uranus.png?raw=1" alt="Uranus" />
            </div>
          </div>
          <div className="system__orbit system__orbit--neptune">
            <div className="system__planet system__planet--neptune">
              <img
                src="https://www.dropbox.com/s/170sr7xl6gxpona/neptune.png?raw=1"
                alt="Neptune"
              />
            </div>
          </div>
          <div className="system__orbit system__orbit--pluto">
            <div className="system__planet system__planet--pluto">
              <img src="https://www.dropbox.com/s/z7axkafhs887t9b/pluto.png?raw=1" alt="Pluto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
