import React from 'react'

const LiveMessage = (props) => {
    const { text, uid } = props.message

  return (
    <div>{text}</div>
  )
}

export default LiveMessage