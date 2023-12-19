import React from 'react'

export default function page({params:{slug}}:{params:{slug:string}}) {
  return (
    <h1>Build / {slug}</h1>
  )
}
