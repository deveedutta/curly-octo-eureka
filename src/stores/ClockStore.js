import React, { createContext } from "react";

export const ClockStoreContext = createContext();
export const ClockStoreContextProvider = ClockStoreContext.Provider;
export const ClockStoreContextConsumer = ClockStoreContext.Consumer;

class ClockStore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.doThis();
    // this.doThat();
  }

  startTimer = () => {
    console.log("startTimer");
  };

  stopTimer = () => {
    console.log("stopTimer");
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
        }}
      >
        {this.props.children}
      </ClockStoreContextProvider>
    );
  }
}

export default ClockStore;
