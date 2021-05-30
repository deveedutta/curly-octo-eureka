export default class ExpenseStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    // all api
  }

  createGroup() {}

  createExpense() {}

  count = 0;

  addFriend = (data) => {
    alert("addFriend");
    let friend = new InstanceOfUser({
      name: `myFriend ${(this.count += 1)}`,
      id: `Person00${(this.count += 1)}`,
      partsOfGroups: [],
      expensesIncurred: [],
      ...data,
    });
  };

  splitExpenseWithThisFriend = (expense, friend) => {};

  render() {
    return (
      <ExpenseStoreProvider
        value={{
          ...this.state,
          addFriend: this.addFriend,
          splitExpenseWithThisFriend: this.splitExpenseWithThisFriend,
        }}
      >
        {this.props.children}
      </ExpenseStoreProvider>
    );
  }
}
