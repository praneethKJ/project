import React, { useEffect } from 'react'

function Listing(props) {

  return (
    <div className="container-lg flex justify-center py-4">
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 ">
          <img className="w-fit m-auto p-3" src="ppp.jpg" alt="Sunset in the mountains" />
          <div className="px-6 pt-0 pb-2">
            <div className="title">Title</div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
          <img className="w-fit m-auto p-3" src="ppp.jpg" alt="Sunset in the mountains" />
          <div className="px-6 pt-0 pb-2">
            <div className="title">Title</div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
          <img className="w-fit m-auto p-3" src="ppp.jpg" alt="Sunset in the mountains" />
          <div className="px-6 pt-0 pb-2">
            <div className="title">Title</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Listing