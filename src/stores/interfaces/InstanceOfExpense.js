class InstanceOfExpense {
  date = null;
  type = null;
  youPaid = null;
  groupName = null;
  groupID = null;
  youOweGroup = null;

  constructor(data) {
    let { date, type, youPaid, groupName, groupID, youOweGroup } = data;
    this.date = date;
    this.type = type;
    this.youPaid = youPaid;
    this.groupName = groupName;
    this.groupID = groupID;
    this.youOweGroup = youOweGroup;
  }
}

export default InstanceOfExpense;
