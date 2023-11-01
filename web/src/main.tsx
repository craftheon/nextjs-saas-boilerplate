import React from 'react'
import ReactDOM from 'react-dom/client'
import { Button } from '@devsmeta/bee'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <div>
        <Button theme='primary' className="xx">Hello world</Button>
        <Button theme='second'>Hello world</Button>
        <Button>Hello world</Button>
      </div>
    </div>
  </React.StrictMode>,
)
