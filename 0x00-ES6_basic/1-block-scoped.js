export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  let taskResult = task;
  let task2Result = task2;

  if (trueOrFalse) {
    taskResult = true;
    task2Result = false;
  }

  return [taskResult, task2Result];
}
