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

export async function tasksListByState (_id) {
  const data = await getRequest(getTasksByStateURI + _id)
  return data.tasks
}

export async function getRequest (_route) {
  const response = await axios.get(_route)
  return response.data
}
