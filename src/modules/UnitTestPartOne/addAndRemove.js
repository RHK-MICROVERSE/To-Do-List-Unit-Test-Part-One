const tasksList = [];

const tasksAddRemove = {
  existingTasks: () => tasksList,
  addTask: (taskStatement) => {
    const create = {
      description: taskStatement,
      completed: false,
      index: tasksList.length + 1,
    };
    if (create.description !== '') {
      tasksList.push(create);
    }
  },
  removeTask: (index) => {
    tasksList.splice(index, 1);
    return tasksList;
  },
};

module.exports = { tasksList, tasksAddRemove };