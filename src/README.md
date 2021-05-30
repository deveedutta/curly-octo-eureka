# Splitter

Splitter is an app for splitting expenses with your friends. It lets you and your friends add
various bills and keep track of who owes who, and then it helps you to settle up with
each other.
Below should be the functionality of splitter system:

1. Group consists of a set of users who want to split bills.
2. User can be part of multiple groups
3. A Bill is assigned to a Group.
4. Multiple Users are assigned to a bill.
5. User shares can be divided equally based on fixed values or by percentage.
6. Please provide a summary view to a user to view amount he owes at group level
   and overall across groups
7. Sends reminder end of the month to settle debts

Expectation :

1. Make sure that you can execute the code and show that in a working state
2. Use an in-memory store for now. No need to use any database to store data
3. Make sure code functionality correct, and edge cases are covered
4. Code should be easily testable
5. Exceptions are raised and handled appropriately.
6. Separation of concerns is addressed.
7. A driver function that can be used to test the functionality.

Steps:

1. Add people

   - Split the bill in %age too.
   - Split the bill with them

2. Add people to groups
   - Split the bill within the group
