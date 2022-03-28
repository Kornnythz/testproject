// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from 'nextjs-cors';
import axios from 'axios'
import {APIUrl} from './Config.js';
let API = APIUrl();

export default async function handler(req, res) {

  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  if (req.method === 'POST') {

    await axios.post(API.backendHost + '/login', req.body)
      .then(response => {
        console.log(response.data)
        res.send(response.data)
      })

  } else {

  }
}