import React from 'react'

export default function Spacer({ size }: { size: number }) {
  return <div className={'my-' + size} />
}
