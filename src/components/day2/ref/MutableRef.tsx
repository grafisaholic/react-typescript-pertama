import React, { useEffect, useRef, useState } from 'react'

function MutableRef() {
  const [timer, setTimer] = useState(0)
  const IntervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (IntervalRef.current) window.clearInterval(IntervalRef.current)
  }

  useEffect(() => {
    IntervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)

    return () => {
      stopTimer()
    }
  }, [])

  return (
    <div>
      Timer - {timer} <br />
      <button
        className='bg-transparent hover:bg-blue-500 text-blue-700 px-3 py-2 border border-blue-500 hover:text-white rounded-md hover:border-transparent m-2'
        onClick={() => stopTimer()}
      >
        Clear Interval
      </button>
    </div>
  )
}

export default MutableRef