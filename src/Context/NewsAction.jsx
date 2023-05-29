export const getNews = async(topic)=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-03-21&sortBy=publishedAt&apiKey=3a28fad9b60d45318aaf505c816b4ead`)
    const data = await response.json()
    // console.log (data)
    return data.articles
}
