import React from 'react';
import { BiMinus } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import useCart from '../hooks/useCart';

const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-105';

export default function CartItem({ product, product: {id, image, title, option, quantity, price}, 
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const handleMinus = () => {
    if(quantity < 2) return;
    addOrUpdateItem.mutate({...product, quantity: quantity - 1});
  };
  const handlePlus = () => addOrUpdateItem.mutate({...product, quantity: quantity + 1});
  const handleDelete = () => removeItem.mutate(id);


  return (
    <li className='flex justify-between my-2 items-center'>
      <img className='w-24 md:w-48 rounded-lg' src={image} alt={title}/>
      <div className='flex-1 flex justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg'>{title}</p>
          <p className='text-xl'>{option}</p>
          <p className='text-xl font-bold text-brand'>{price}원</p>
        </div>
        <div className='text-2xl flex items-center'>
          <BiMinus className={ICON_CLASS} onClick={handleMinus}/>
          <span>{quantity}</span>
          <BiPlus className={ICON_CLASS} onClick={handlePlus}/>
          <MdDelete className={ICON_CLASS} onClick={handleDelete}/>
        </div>
      </div>
    </li>
  );
}

