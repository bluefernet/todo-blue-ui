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
export const updateTaskUri = process.env.EXTERNAL_API_URL + '/v1/task/'

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
      updateTaskUri + _id,
      qs.stringify(_task)
    )
    .then((res) => {
      console.log(res.data) // TODO - VERIFICARE QUESTA PAGINA
    })
    .catch(e => console.log(e))
}
