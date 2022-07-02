import React from 'react'
import TechnologyList from '../../../src/technologydata.json'

const Technology = (props) => {
  return (
    <div>
      {TechnologyList.map((lists,index)=>
      <>
      <p>{lists.tille}
      </p>
      {lists.list.map((data,index)=>
      <img src={data.image}/>
      )}
      </>
      )}
    </div>
  )
}

export default Technology
