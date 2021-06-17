import { useState, useContext, useEffect } from "react";

import { ClockStoreContext } from "../stores/ClockStore";

const useTwoWay = (...args) => {
  const clockStore = useContext(ClockStoreContext);

  useEffect(() => {});

  return {
    onFoo: () => {
      clockStore.updateUIState({
        foo: "bar",
      });
    },
    state: {
      ...clockStore,
    },
  };
};

export default useTwoWay;
