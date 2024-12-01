import React, { ReactNode } from 'react'

type Props = {
  count: number;
  children?: ReactNode;
}

const Test = ({ children, count }: Props) => {
  return (
    <div>
      <h3>This is test component {count}</h3>
      {children}
    </div>
  )
}

export default Test