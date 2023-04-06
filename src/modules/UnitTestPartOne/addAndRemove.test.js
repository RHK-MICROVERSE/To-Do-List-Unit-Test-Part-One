const { tasksList, tasksAddRemove } = require('./addAndRemove.js');

describe('Task Add function to add taks in  tasksList', () => {
  test('Does addTask function exist?', () => {
    expect(tasksAddRemove.addTask).toBeDefined();
  });
  test('Adding task to tasksList considering the  taskStatement', () => {
    expect(tasksAddRemove.addTask('Withdraw money from Bank')).toEqual(tasksList.description);
  });
  test('Add task to tasksList with the correct index', () => {
    expect(tasksAddRemove.addTask('Clear the Garden')).toEqual(tasksList.index);
  });
  test('Add task to tasksList confirm if it is being Completed', () => {
    expect(tasksAddRemove.addTask('Wash clothes')).toEqual(tasksList.isCompleted);
  });
});

describe('Checking the Remove function argument', () => {
  test('Does removeTask function exist?', () => {
    expect(tasksAddRemove.removeTask).toBeDefined();
  });

  it('Remove a task if it exist in the tasksList', () => {
    expect(tasksAddRemove.removeTask(0)).toEqual(tasksAddRemove.existingTasks());
  });
});