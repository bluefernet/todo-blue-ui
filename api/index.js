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
  axios
    .post(
      createTaskURI,
      qs.stringify(_task)
    )
    .then((res) => {
      console.log(res.data) // TODO --> res.data.error - return pageError
    })
    .catch(e => console.log(e))
}

export function updateTask (_id, _task) {
  axios
    .put(
      updateTaskURI + _id,
      qs.stringify(_task)
    )
    .then((res) => {
      console.log(res.data) // TODO --> res.data.error - return pageError
    })
    .catch(e => console.log(e))
}

export async function allTasks (_pageSize) {
  const data = await getRequest(getTasksURI)
  return divideTaskByStatus(data.tasks, _pageSize)
}

export async function taskById (_id) {
  const data = await getRequest(getTaskByIdURI + _id)
  data.task.date = new Date(data.task.date)
  data.task.state = JSONtoOptionState(data.task.state)
  return data.task
}

export async function tasksListByState (_id) {
  const data = await getRequest(getTasksByStateURI + _id)
  return data
}

export async function getRequest (_route) {
  const response = await axios.get(_route)
  return response.data
}
