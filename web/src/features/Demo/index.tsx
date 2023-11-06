import React from "react"
import { Button } from "@devsmeta/bee"

const DemoPage: React.FC<{}> = function () {
  return (
    <div className="p-2">
      <p className="mb-2">Button:</p>
      <Button theme="primary">Hello world</Button>
      <Button theme="second" className="mx-2">Hello world</Button>
      <Button>Hello world</Button>
      <Button className="w-full mt-2">Full Button</Button>
      <hr className="m-2" />

      <p className="mb-2">Message:</p>
      <Button theme="primary">Success message</Button>
      <Button className="mx-2">Error message</Button>
      <Button>Info message</Button>
    </div>
  )
}

export default DemoPage
