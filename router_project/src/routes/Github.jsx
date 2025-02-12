import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data =useLoaderData()
  return (
    <div>Github followers : {data.followers}</div>
  )
}
export default Github
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/nikitabhutani')
  const data = await response.json()
  return data
}

