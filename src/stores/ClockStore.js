import React, { createContext } from "react";

export const ClockStoreContext = createContext();
export const ClockStoreContextProvider = ClockStoreContext.Provider;
export const ClockStoreContextConsumer = ClockStoreContext.Consumer;

class ClockStore extends React.Component {
  hh = 0;
  mm = 0;
  ss = 0;
  ot = 0;

  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      outTime: null,
    };
  }

  componentDidMount() {
    // this.doThis();
    // this.doThat();
  }

  startTimer = () => {
    // alert("startTimer");
    console.log("startTimer");

    this.setState({
      timer: setInterval(this.setTime, 1000),
    });
  };

  setTime = () => {
    if (this.mm >= 59) {
      this.mm = 0;
      this.ss += 1;
      this.hh = +1;
      if (this.ss >= 59) {
        this.ss = 0;
        this.ss += 1;
        this.mm = +1;
      }
    }

    let hhh = this.hh < 10 ? `0${this.hh}` : `${this.hh}`;
    let mmm = this.mm < 10 ? `0${this.mm}` : `${this.mm}`;
    let sss = this.ss < 10 ? `0${this.ss}` : `${this.ss}`;
    let outTime = `${hhh}:${mmm}:${sss}`;

    this.ot = outTime;

    // `${this.hh}:${this.mm}:${this.ss}`,
    this.setState({
      outTime,
    });
  };

  stopTimer = () => {
    // alert("stopTimer");
    console.log("stopTimer");
    this.setState({
      timer: clearInterval(this.state.timer),
    });
  };

  lapTimer = () => {
    console.log("lapTimer");
  };

  resetTimer = () => {
    console.log("resetTimer");
  };

  render() {
    return (
      <ClockStoreContextProvider
        value={{
          startTimer: this.startTimer,
          stopTimer: this.stopTimer,
          lapTimer: this.lapTimer,
          resetTimer: this.resetTimer,
          ot: this.ot,
          ...this.state,
        }}
      >
        {this.props.children}
      </ClockStoreContextProvider>
    );
  }
}

export default ClockStore;
