export const getEnter =async(topic)=>{
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=3a28fad9b60d45318aaf505c816b4ead`)
    const data = await response.json()
    console.log(data)
    return data.articles
}