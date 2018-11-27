import React {Component} from 'react';
import ./test.css

class Starter extends Component {
  constructor(){
    super();
  }


  render() {
      return(
          <div className="bodyDiv">
            <div className="titleDiv">

              <img className="logo" alt="logo" src={"mainlogo.png"}/>
              <p>Filler</p>
            </div>
          <div className="buttonDiv">
            <ButtonOne />
            <ButtonTwo />
          </div>
        <Background />
      </div>
    )
  }
}

export default Starter;