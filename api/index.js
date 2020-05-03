/*
    API
*/

import axios from 'axios'
import qs from 'qs'
import { JSONtoOptionState, divideTaskByStatus } from '../shared'

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
// -----------------------------------------------------------------------------
// GET - /v1/task/{:id}
// -----------------------------------------------------------------------------
export const getTaskByIdURI = process.env.EXTERNAL_API_URL + '/v1/task/'
// -----------------------------------------------------------------------------
// GET - /v1/tasks
// -----------------------------------------------------------------------------
export const getTasksURI = process.env.EXTERNAL_API_URL + '/v1/tasks'

export function createTask (_task) {
  console.log('api - createTask - date ' + _task.date)
  console.log('api - createTask - date ' + _task.date.toDateString())
  console.log('new Date().getTime() ' + new Date().getTime())
  console.log('new Date().getUTCDate() ' + new Date().getUTCDate())
  console.log('new Date().toDateString() ' + new Date().toDateString())
  console.log('new Date().toISOString() ' + new Date().toISOString())
  console.log('new Date().toJSON() ' + new Date().toJSON())
  console.log('new Date().toUTCString() ' + new Date().toUTCString())
  console.log('new Date().toString() ' + new Date().toString())
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
  console.log('api - updateTask - date ' + _task.date)
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

export async function allTasks () {
  const data = await getRequest(getTasksURI)
  return divideTaskByStatus(data.tasks)
}

export async function taskById (_id) {
  const data = await getRequest(getTaskByIdURI + _id)
  //console.log('api - taskById date pre -' + data.task.date)
  //data.task.date = new Date(data.task.date)
  //console.log('api - taskById date post -' + data.task.date)
  data.task.state = JSONtoOptionState(data.task.state)
  return data.task
}

export async function tasksListByState (_id) {
  const data = await getRequest(getTasksByStateURI + _id)
  return data.tasks
}

export async function getRequest (_route) {
  const response = await axios.get(_route)
  return response.data
}
