import {NextApiRequest, NextApiResponse} from 'next'

export default (request:NextApiRequest, response:NextApiResponse) => {
    
    console.log(request.query);
   
    const user = [
        {id:1, name:'Fabiano'},
        {id:2, name:'Juliano'},
    ]

    return response.json(user);
}