import React from 'react'

const Pagination = () => {
  return (
    <div id='pagination'>
        <div>
            <button>{"<"}</button>
            <button disabled>{1}</button>
            <button>{">"}</button>
        </div>
    </div>
  )
}

export default Pagination
