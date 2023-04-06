import './navbar.css'


const Navbar = () => {
  const user = localStorage.getItem("userName");
  const userName= JSON.parse(user)

  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">ExpenseTracker</span>
            <div className="navItems">
                {/* <button className="navButton">register</button> */}
                <span >{userName}</span>
                <button onClick={()=>{localStorage.clear();
                window.location.replace('/')}} className="navButton">Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar