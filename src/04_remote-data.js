const got = require("got");

/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
async function solution() {
  const { body: todos } = await got(
    "https://jsonplaceholder.typicode.com/todos",
    {
      responseType: "json",
    }
  );
  const { body: users } = await got(
    "https://jsonplaceholder.typicode.com/users",
    {
      responseType: "json",
    }
  );
  const userTodos = {};
  todos.map((todo) => {
    const { userId, completed } = todo;
    if (userTodos[userId]) {
      completed && userTodos[userId].completed++;
    } else {
      const findUser = users.find((user) => user.id === userId);
      if (findUser) {
        const { username } = findUser;
        const completed = todo.completed ? 1 : 0;
        userTodos[userId] = { username, completed };
      }
    }
  });
  return Object.values(userTodos);
}

module.exports = solution;
