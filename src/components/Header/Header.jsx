import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector((state) => state.auth.status); //useSelector is a hook that allows us to extract data from the Redux store state.
  const navigate = useNavigate(); //useNavigate is a hook that returns a function that lets us navigate programmatically.

  const navItems = [
    {
      name: 'Home',
      slug: '/',  // Gives the info where the url should navigate to...
      active: true
    },
    {
      name: 'Login',
      slug: '/login', 
      active: !authStatus // If user already logged in, hide Login
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus // If user already logged in, hide Signup
    },
    {
      name: 'All Post',
      slug: '/all-post',
      active: authStatus // If user is logged in, show All Post
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus // If user is logged in, show Add Post
    },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>     {/*  It is basically a box with full width and with some padding and margin */}
        <nav className='flex'>

          <div className='mr-4'>
            <Link to='/'> {/* Link is used to navigate without reloading the page */}
              <Logo width='70px'>
              </Logo>
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((item) => item.active ? (
              <li key={item.name}>   {/* repeated list items need a unique key prop */}
                <button onClick={()=>navigate(item.slug)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                  {item.name}
                </button>
              </li>
            ) : null
            )} 

            {authStatus && (  //if authStatus is true, show Logout button
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header