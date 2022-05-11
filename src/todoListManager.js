export const initTodoList = () => {
  if (localStorage.TodoList !== undefined) {
    return;
  }

  localStorage.TodoList = JSON.stringify([
    {
      id: 1,
      name: "Complete online JavaScript course",
      complete: true,
    },
    { id: 2, name: "Jog around the park 3x", complete: false },
    { id: 3, name: "10 minutes meditation", complete: false },
    { id: 4, name: "Read for 1 hour", complete: false },
    { id: 5, name: "Pick up groceries", complete: false },
    { id: 6, name: "Complete Todo App on Frontend Mentor", complete: false },
  ]);
};
