// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from 'nextjs-cors';
import axios from 'axios'

export default async function handler(req, res) {

  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
  });

  if (req.method === 'GET') {

    // await axios.get('http://192.168.159.76:8080/testApi')
    // await axios.get('http://dev-tws.thailife.com:8080/WebPreScreenLinkedWS/testApi')
    await axios.get('https://dev-sgi-api.thailife.com:8243/WebPreScreenLinkedWS')
      .then(response => {
        console.log(response.data)
        res.send(response.data)
      })

  } else {

  }
}