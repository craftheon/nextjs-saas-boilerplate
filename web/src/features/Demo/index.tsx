import React from "react"
import { Button } from "@devsmeta/bee"

const DemoPage: React.FC<{}> = function () {
  return (
    <div>
      <p>Button:</p>
      <Button theme="primary">Hello world</Button>
    </div>
  )
}

export default DemoPage
