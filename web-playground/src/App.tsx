import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('111')

  useEffect(() => {
    console.log('useEffect', document.getElementById('test')?.innerText)
  }, [value])

  useLayoutEffect(() => {
    document.getElementById('test')?.style.setProperty('border', '1px solid red')
  }, [value])
  return (
    <>
      <div id='test' data-testId="" onClick={() => setValue('test')} style={{ border: '1px solid #ccc', padding: '20px' }}>{value}</div>
    </>
  )
}

export default App
