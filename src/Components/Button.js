import React from 'react'

export default function Button({children}) {
  return (
    <div>
      <button className="px-4 py-2 bg-grey-500 text-black rounded hover:text-blue-600 cursor:pointer">
        {children}
      </button>
    </div>
  )
}
