import React, { useContext, useEffect } from 'react'
import NewsContext from '../Context/NewsContext'
import NewCard from './NewCard'
import { getNews } from '../Context/NewsAction'
import CardCarousel from './CardCarousel'

const Card = () => {
  const { news, dispatch } = useContext(NewsContext)
  const getData = async () => {
    const data = await getNews()
    dispatch({
      type: "GET_NEWS",
      payload: data
    })
  }
  useEffect(() => {
    getData()
  }, [])

  if (!news) {
    return (
      <div className='svg-secti'>
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
          <div className="wheel"></div>
          <div className="hamster">
            <div className="hamster__body">
              <div className="hamster__head">
                <div className="hamster__ear"></div>
                <div className="hamster__eye"></div>
                <div className="hamster__nose"></div>
              </div>
              <div className="hamster__limb hamster__limb--fr"></div>
              <div className="hamster__limb hamster__limb--fl"></div>
              <div className="hamster__limb hamster__limb--br"></div>
              <div className="hamster__limb hamster__limb--bl"></div>
              <div className="hamster__tail"></div>
            </div>
          </div>
          <div className="spoke"></div>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className='bak-section'><CardCarousel /></div>
      <div className='row gx-5 p-2 '>
        {
          news.map((news, index) => <NewCard key={index} news={news} />)
        }
      </div>
    </>
  )
}

export default Card
