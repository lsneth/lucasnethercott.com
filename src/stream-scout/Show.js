import { Outlet } from 'react-router-dom'

export default function Show() {
  return (
    <div>
      <h1>Show</h1>
      <Outlet />
    </div>
  )
}
