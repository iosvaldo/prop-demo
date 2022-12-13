import React from 'react'

function MainBtn({ emoji = '🧑‍🚀',label }) {
  return (
    <button>
      <span role="img">{emoji}</span>
      { label}
    </button>
  )
}

export default MainBtn