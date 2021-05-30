class InstanceOfUser {
  name = null;
  id = null;
  partsOfGroups = [];
  expensesIncurred = [];

  constructor(data) {
    let { name, id, partsOfGroups, expensesIncurred } = data;

    this.name = name;
    this.id = id;
    this.partsOfGroups = partsOfGroups;
    this.expensesIncurred = expensesIncurred;
  }
}

export default InstanceOfUser;
