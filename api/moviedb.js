import axios from 'axios';
import {apiKeys} from '../constant/api'


const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKeys}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1'?api_key=${apiKeys}`
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?language=en-US&page=1'?api_key=${apiKeys}`

const apiCall = async (endpoint, params)=>{
    // console.log('breackPoint');
    const options = {
        method: 'GET',
        url: endpoint,
        // only if we have a parameter we will pass it
        params: params ?  params : {}
    }
    
    try{
      const response = await axios.request(options);
    //   console.log('API Response:', response);
      return response.data;
    }catch(error){
        console.log('error: ', error);
        return {}
    }
}

export const fetchTrendingMovies = () =>{
    // console.log('breackPoint3');
    return apiCall(trendingMoviesEndpoint);
}

export const fetchUpcomingMovies = () =>{
    return apiCall(upcomingMoviesEndpoint);
}

export const fetchTopRatedMovies = () =>{
    return apiCall(topRatedMoviesEndpoint);
}