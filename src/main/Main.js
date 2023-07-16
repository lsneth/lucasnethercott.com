import { Outlet, Link } from 'react-router-dom'
import css from '../styles.css'

export default function Main() {
  return (
    <>
      <div>
        <h1>lucasnethercott.com</h1>
        <Link to={`stream-scout`}>Stream Scout</Link>
        <Link to={`about`}>About</Link>
        <Outlet />
      </div>
    </>
  )
}
