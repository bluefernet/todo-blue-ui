export const doneOption = 'Completato'
export const todoOption = 'Inserito'
export const doingOption = 'In elaborazione'
export const doneJSON = 'DONE'
export const todoJSON = 'TODO'
export const doingJSON = 'DOING'

export function JSONtoOptionState (_state) {
  switch (_state) {
    case doneJSON:
      _state = doneOption
      break
    case todoJSON:
      _state = todoOption
      break
    case doingJSON:
      _state = doingOption
      break
    default:
      break
  }
  return _state
}

export function optionToJSONState (_state) {
  switch (_state) {
    case doneOption:
      _state = doneJSON
      break
    case todoOption:
      _state = todoJSON
      break
    case doingOption:
      _state = doingJSON
      break
    default:
      break
  }
  return _state
}

export function divideTaskByStatus (_tasks, _pageSize) {
  const asyncTasksTodo = []
  const asyncTasksDoing = []
  const asyncTasksDone = []
  _tasks.forEach((task) => {
    switch (task.state) {
      case 'TODO':
        if (asyncTasksTodo.length < _pageSize) {
          asyncTasksTodo.push(task)
        }
        break
      case 'DOING':
        if (asyncTasksDoing.length < _pageSize) {
          asyncTasksDoing.push(task)
        }
        break
      case 'DONE':
        if (asyncTasksDone.length < _pageSize) {
          asyncTasksDone.push(task)
        }
        break
      default:
        break
    }
  })
  return {
    todo: asyncTasksTodo,
    doing: asyncTasksDoing,
    done: asyncTasksDone
  }
}
