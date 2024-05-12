import React from 'react'

export default function ProgressBarVertical(props) {
    console.log(props);
  return (
    <div>
      <progress value={'32'} max={'100'}>
        {'32%'}
      </progress>
    </div>
  )
}
