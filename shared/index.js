export const doneOption = 'Completato'
export const todoOption = 'Inserito'
export const doingOption = 'In elaborazione'

export function JSONtoOptionState (_state) {
  switch (_state) {
    case 'DONE':
      _state = doneOption
      break
    case 'TODO':
      _state = todoOption
      break
    case 'DOING':
      _state = doingOption
      break
    default:
      break
  }
  return _state
}
