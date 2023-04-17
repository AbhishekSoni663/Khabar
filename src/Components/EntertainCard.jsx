import React, { useContext, useEffect } from 'react'
import EnterContext from '../Context3/EnterContext'
import EntertainmentNews from './EntertainmentNews'
import { getEnter } from '../Context3/EnterAction'
import EnterCarousel from './EnterCarousel'

const EntertainCard = () => {

    const {entertainments , dispatch} = useContext(EnterContext)


    const getEnterData = async () =>{
        const data = await getEnter()
        dispatch({
            type:"ENTER_NEWS",
            payload:data
        })
    }
    useEffect(()=>{
        getEnterData()
    },[])

    if(!entertainments || entertainments.length === 0){
        return(
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
        <div className='bak-section'><EnterCarousel/></div>
            <div className='row gx-5 p-2 '>
               {
                entertainments.map((entertainment, index)=><EntertainmentNews key={index} entertainment={entertainment}/>)
               }
                 
            </div>
        </>
    )
}

export default EntertainCard
