import { useState, useContext, useEffect } from "react";

import { ExpenseStoreContext } from "../stores/ExpenseStore";

const useTwoWay = (...args) => {
  const expenseStore = useContext(ExpenseStoreContext);

  useEffect(() => {});

  return {
    showForm: () => {
      expenseStore.updateUIState({
        showForm: true,
      });
    },
    state: {
      ...expenseStore.initialUIState,
      ...expenseStore.appState,
      initialUIState: expenseStore.initialUIState,
      shouldShowForm: expenseStore.initialUIState.showForm,
      addNew: expenseStore.addNew,
    },
  };
};

export default useTwoWay;
