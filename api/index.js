/*
    API
*/

import axios from 'axios'
import qs from 'qs'

// -----------------------------------------------------------------------------
// POST - /v1/tasks
// -----------------------------------------------------------------------------
export const createTaskURI = process.env.EXTERNAL_API_URL + '/v1/tasks'
// -----------------------------------------------------------------------------
// PUT - /v1/task/{:id}
// -----------------------------------------------------------------------------
export const updateTaskURI = process.env.EXTERNAL_API_URL + '/v1/task/'
// -----------------------------------------------------------------------------
// GET - /v1/tasksState/{:state}
// -----------------------------------------------------------------------------
export const getTasksByStateURI = process.env.EXTERNAL_API_URL + '/v1/tasksState/'

export function createTask (_task) {
  axios
    .post(
      createTaskURI,
      qs.stringify(_task)
    )
    .then((res) => {
      console.log(res.data)
    })
    .catch(e => console.log(e))
}

// ModalConfirmButton
export function updateTask (_id, _task) {
  axios
    .put(
      updateTaskURI + _id,
      qs.stringify(_task)
    )
    .then((res) => {
      console.log(res.data) // TODO - VERIFICARE QUESTA PAGINA
    })
    .catch(e => console.log(e))
}

export function tasksListByState (_id) {
  const tasks = getRequest(getTasksByStateURI + _id)
    .then((res) => {
      console.log(res)
      return res.tasks
    })
    .catch(e => console.log(e))
  return tasks
}

export function getRequest (_route) {
  return axios
    .get(_route)
    .then((res) => {
      console.log(res.data) // TODO - VERIFICARE QUESTA PAGINA
      return res.data
    })
    .catch(e => console.log(e))
}
