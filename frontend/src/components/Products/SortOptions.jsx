import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set('sortBy', sortBy);
    setSearchParams(searchParams);
  }
  return (
    <div className='mb-4 flex items-center justify-end'>
      <select 
      onChange={handleSortChange}
      value={searchParams.get('sortBy')}
      id="sort">
      <option value="">default</option>
      <option value="priceAsc">price: low to high</option>
      <option value="priceDesc">price: high to low</option>
      <option value="popularity">popularity </option>
      </select>
    </div>
  )
}

export default SortOptions