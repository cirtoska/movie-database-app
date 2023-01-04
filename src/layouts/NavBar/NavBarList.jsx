import React from 'react'
import FontAwesomeIcon from 'react-fontawesome'

const NavBarList = ({items}) => {
  const getItem = (item) => {
    let itemList = null
    switch(item.type) {
      case 'logo':
        itemList = <img className='h-5 min-w-[154px]' src={item.src} alt={item.name} />
        break;
      case 'language':
        itemList = <p className='border-white rounded-[3px] py-[3px] px-[5px] border-[1px] border-solid hover:bg-white hover:text-tmdbDarkBlue'>{item.name}</p>
        break;
      case 'icon':
        itemList = <FontAwesomeIcon name={item.name} size='lg' />
        break
      default:
        itemList = <p>{item.name}</p>
        break
  } 
  return itemList
}
  return (
    <ul className='flex gap-7 items-center'>
      {items.map((item, index) => {
        return <li key={index}>{getItem(item)}</li>
      })}
    </ul>
  )
}

export default NavBarList