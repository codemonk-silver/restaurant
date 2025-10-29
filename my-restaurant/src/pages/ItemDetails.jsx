import React from 'react'
import ItemDetailsNav from '../components/ItemDetailsNav'
import ItemDetailsContent from '../components/ItemDetailsContent'
import ItemDetailsBenefit from '../components/itemDetailsBenefit'

const ItemDetails = () => {
  return (
    <div>
      <ItemDetailsNav />
      <ItemDetailsContent />
      <ItemDetailsBenefit />
    </div>
  )
}

export default ItemDetails