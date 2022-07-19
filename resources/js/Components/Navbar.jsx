import { Link } from "@inertiajs/inertia-react"



const Navbar = ({ user }) => {
    console.log('isUser?', user)
    return (
        <div className="navbar bg-base-100 shadow-xl">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl font-weight: 700">BeritaHoax</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.pinimg.com/564x/43/7f/d8/437fd85b4a19bbe0331843e22bec49a2.jpg" />
        </div>
      </label>
      <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        {!user ? 
        <>
        <li><Link href={route('login')} as="button">Login</Link></li>
        <li><Link href={route('register')} as="button">Register</Link></li>
        </>
        :
        <>
        <li>
          <Link href={route('dashboard')} as="button"className="justify-between">
            Dashboard
            <span className="badge">ADMIN</span>
          </Link>
        </li>
        
        <li><Link href={route('logout')} method="post" as="button">Logout</Link></li>
        </>
        }   
      </ul>
    </div>
  </div>
</div>
    )
}

export default Navbar