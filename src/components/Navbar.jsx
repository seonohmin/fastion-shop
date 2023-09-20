import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillShop } from 'react-icons/ai'
import { PiPencilLineDuotone } from 'react-icons/pi'
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const {user, login, logout} = useAuthContext();

  return (
    <header className='flex justify-between border-b border-gray-900 p-2'>
      <Link to="/" className='flex items-center text-brand'> 
        <AiFillShop className='text-2xl mr-2'/>
        <h1 className='text-2xl'>Fashion Shop</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        {user && <Link to='/carts'><CartStatus /></Link>}
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-3xl'><PiPencilLineDuotone /></Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
        
      </nav> 
    </header>
  );
}

