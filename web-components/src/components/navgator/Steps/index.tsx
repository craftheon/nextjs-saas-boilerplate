import { HTMLAttributes } from "react"

export interface StepsProps extends HTMLAttributes<HTMLElement> {

}

export interface StepItemProps {

}

const Steps: React.FC<StepsProps> = function ({

}) {
  return (
    <div></div>
  )
}

const StepItem: React.FC<StepItemProps> = function ({

}) {
  return (
    <div></div>
  )
}

Steps.Item = StepItem

export default Steps
