import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/noughtscrosses',
})

export const getAllMovies = () => api.get('/get',{headers: {"Authorization": "Bearer token"}})
export const getMovieById = gameid => api.get('/getbyid/'+gameid,{headers: {"Authorization": "Bearer token"}})
export const getwatchchages = () => api.get('/watch').then((data) => console.log(data))

const apis = {getAllMovies,getMovieById,getwatchchages}

export default apis
