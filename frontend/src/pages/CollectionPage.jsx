import React, { useEffect, useRef, useState } from 'react'
import {FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleClickOutSide = (e) => {
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
      setIsSidebarOpen(false)
      
    }
  }
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
            _id: 1,
            name: "project 1",
            price: 100,
            images: [{url: 'https://picsum.photos/500/500?random=3', altText: 'project 1'}]
        },
        
        {
            _id: 2,
            name: "project 2",
            price: 100,
            images: [{url: 'https://picsum.photos/500/500?random=4', altText: 'project 2'}]
        },
        {
            _id: 3,
            name: "project 3",
            price: 100,
            images: [{url: 'https://picsum.photos/500/500?random=5', altText: 'project 3'}]
        },
        {
            _id: 4,
            name: "project 4",
            price: 100,
            images: [{url: 'https://picsum.photos/500/500?random=6', altText: 'project 4'}]
        },
        {
            _id: 5,
            name: "project 5",
            price: 100,
            images: [{url: 'https://picsum.photos/500/500?random=7', altText: 'project 5'}]
        },
        
        {
            _id: 6,
            name: "project 6",
            price: 100,
            images: [{url: 'https://picsum.photos/500/500?random=8', altText: 'project 6'}]
        },
        {
            _id: 7,
            name: "project 7",
            price: 100,
            images: [{url: 'https://picsum.photos/500/500?random=9', altText: 'project 7'}]
        },
        {
            _id: 8,
            name: "project 8",
            price: 100,
            images: [{url: 'https://picsum.photos/500/500?random=10', altText: 'project 8'}]
        }
    ]
    setProducts(fetchedProducts)
    }, 1000)
  }, [])
  return (
    <div className='flex flex-col lg:flex-row'>
      <button onClick={toggleSidebar} className='lg:hidden border p-2 flex justify-center items-center'>
        <FaFilter className='mr-2' /> Filter
      </button>
      <div ref={sidebarRef} className={`${isSidebarOpen? 'translate-x-0': '-translate-x-full'} fixed inset-y-0 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSidebar />
      </div>
      <div className='flex-grow p-4'>
        <h2 className='text-2xl uppercase mb-4'>All Collections</h2>
        <SortOptions />
        <ProductGrid products={products} />
      </div>

    </div>
  )
}

export default CollectionPage