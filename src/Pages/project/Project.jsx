import React from 'react'

function Project(props) {
  return (
    <div>
      {props.labels.map((list) => (
        <p><input type="radio" name="project_type" value={list} /> {list}</p>
      ))}
    </div>
  )
}

export default Project
