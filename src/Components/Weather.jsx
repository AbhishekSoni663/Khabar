import React, { useContext, useEffect } from 'react'
import WeatherContext from '../Context4/WeatherContext'
import { getWeather } from '../Context4/WeatherAction'
import WeatherCard from './WeatherCard'

const Weather = () => {
    const {weathers, dispatch} = useContext(WeatherContext)

    const getWeatherData = async()=>{
        const data = await getWeather()
        dispatch({
            type:"WEATHER_DATA",
            payload:data
        })
    }
    useEffect(()=>{
        getWeatherData()
    },[])
  return (
    <div className='weat'>
      {
        weathers.map((weather,index)=><WeatherCard key={index} weather={weather}/>)
      }
    </div>
  )
}

export default Weather
