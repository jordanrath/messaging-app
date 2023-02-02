import React from 'react'

const LiveMessage = (props) => {
    const { text, userId } = props.message

  return (
    <div>{text}</div>
  )
}

export default LiveMessage