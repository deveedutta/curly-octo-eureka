import React, { useState, useContext, useEffect } from "react";

// import friends from "./../services/friends.json";

import InstanceOfExpense from "./interfaces/InstanceOfExpense";
import InstanceOfUser from "./interfaces/InstanceOfUser";

export const ExpenseStoreContext = React.createContext();
export const ExpenseStoreProvider = ExpenseStoreContext.Provider;
export const ExpenseStoreConsumer = ExpenseStoreContext.Consumer;

const EXPENSE_TYPES = [
  "groceies",
  "entertainment",
  "electricity bill",
  "dinner",
  "gas or road trip",
];

const ExpenseStore = (props) => {
  let count = 0;
  const [initialUIState, updateUIState] = useState({
    loading: false,
    showForm: false,
  });

  const [appState, updateAppState] = useState({
    friends: [],
    count,
    owes: 0,
    owed: 0,
    total: 0,
  });

  useEffect(() => {
    updateUIState({
      ...initialUIState,
      loading: true,
    });

    getFriends()
      .then((friends) => {
        let acc = {
          total: 0,
          owes: 0,
          owed: 0,
        };
        friends.reduce((acc, item, index) => {
          let owes = parseFloat(item.owes.replace(/[$,]/gi, ""));
          let owed = parseFloat(item.owed.replace(/[$,]/gi, ""));
          acc.owes += owes;
          acc.owed += owed;
          acc.total += owes - owed;

          return acc;
        }, acc);

        return {
          friends,
          ...acc,
        };
      })
      .then(({ friends, owes, owed, total }) => {
        updateAppState({
          ...appState,
          friends,
          owes,
          owed,
          total,
        });
      })
      .finally(() => {
        updateUIState({
          ...initialUIState,
          // loading: true,
          loading: false,
        });
      });
  }, []);

  const getFriends = (data) => {
    return new Promise((resolve, reject) => {
      import("./../services/friends.json")
        .then((res) => res.default)
        .then((friends) => {
          setTimeout(() => {
            resolve(friends);
          }, 10);
        });
    });
  };
  const createExpense = (data) => {};
  const createGroup = (data) => {};
  const splitExpenseWithThisFriend = (expense, friend) => {};

  const addNew = () => {
    updateUIState({
      ...initialUIState,
      showForm: true,
    });
  };
  const addFriend = (data) => {
    alert("addFriend");
    let friend = new InstanceOfUser({
      name: `myFriend ${(count += 1)}`,
      id: `Person00${(count += 1)}`,
      partsOfGroups: [],
      expensesIncurred: [],
      ...data,
    });
  };

  return (
    <ExpenseStoreProvider
      value={{
        appState,
        initialUIState,
        updateAppState,
        updateUIState,
        addNew,
        addFriend,
        splitExpenseWithThisFriend,
      }}
    >
      {props.children}
    </ExpenseStoreProvider>
  );
};

export default ExpenseStore;
