const API_KEY = "8519ab2763904e9196b1dfe11a4c872f"
export const getSport = async(topic)=>{
   const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API_KEY}`)
    const data = await response.json()
    // console.log(response)
    // console.log(data)
    return data.articles
}



