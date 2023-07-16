import { Outlet } from 'react-router-dom'
// import css from './styles.css'

export default function StreamScout() {
  return (
    <div id="stream-scout-root">
      <Outlet />
      <h1>test</h1>
    </div>
  )
}
