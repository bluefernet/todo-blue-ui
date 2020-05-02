/*
    API

*/

import axios from 'axios'
import qs from 'qs'

// POST - /v1/tasks
export const createTaskURI = process.env.EXTERNAL_API_URL + '/v1/tasks'

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
