import React, { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NewArrivals = () => {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(true)
  const [canScrollRight, setCanScrollRight] = useState(true)


  const newArrivals = [
    {
      _id: '1',
      price: 120,
      name: 'Stylish Jacket',
      images: [
        {
          url: 'https://picsum.photos/500?random=1',
          altText: 'Stylish Jacket',
        }
      ]
    },{
      _id: '2',
      price: 120,
      name: 'Stylish Jacket',
      images: [
        {
          url: 'https://picsum.photos/500?random=2',
          altText: 'Stylish Jacket',
        }
      ]
    },{
      _id: '3',
      price: 120,
      name: 'Stylish Jacket',
      images: [
        {
          url: 'https://picsum.photos/500?random=3',
          altText: 'Stylish Jacket',
        }
      ]
    },{
      _id: '4',
      price: 120,
      name: 'Stylish Jacket',
      images: [
        {
          url: 'https://picsum.photos/500?random=4',
          altText: 'Stylish Jacket',
        }
      ]
    },{
      _id: '5',
      price: 120,
      name: 'Stylish Jacket',
      images: [
        {
          url: 'https://picsum.photos/500?random=5',
          altText: 'Stylish Jacket',
        }
      ]
    },{
      _id: '6',
      price: 120,
      name: 'Stylish Jacket',
      images: [
        {
          url: 'https://picsum.photos/500?random=6',
          altText: 'Stylish Jacket',
        }
      ]
    },{
      _id: '7',
      price: 120,
      name: 'Stylish Jacket',
      images: [
        {
          url: 'https://picsum.photos/500?random=7',
          altText: 'Stylish Jacket',
        }
      ]
    },{
      _id: '8',
      price: 120,
      name: 'Stylish Jacket',
      images: [
        {
          url: 'https://picsum.photos/500?random=8',
          altText: 'Stylish Jacket',
        }
      ]
    },
  ]

  const scroll = (direction) => {
    const amount = direction === "left"? -300: 300;
    scrollRef.current.scrollBy({left: amount, behavior: 'smooth'})
  }
  const updateScrollButton = () => {
    const container = scrollRef.current;
    if(container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth
      setCanScrollLeft(leftScroll > 0)
      setCanScrollRight(rightScrollable)
    }

  }
  useEffect(() => {
    const container = scrollRef.current;
    if(container) {
      container.addEventListener("scroll", updateScrollButton)
      updateScrollButton()
      return () => container.removeEventListener('scroll', updateScrollButton)
    }
  }, [])
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
    
  }
  const handleMouseMove = (e) => {
    if(!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }
  const handleMouseUp = () => {
    setIsDragging(false)
  }
  const handleMouseLeave = () => {

  }
  return (
    <section className='px-4 md:px-0'>
      <div className='container mx-auto text-center mb-10 relative'>
        <h2 className='text-3xl font-bold mb-4'>Explore new Arrivals</h2>
        <p className='text-lg text-gray-600 mb-8'>
          Discover the latest styles straight of the runway, freshly added to keep your wardrobe on the cutting edge of fashion. 
        </p>
        <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
          <button 
            className={`p-2 rounded border ${canScrollLeft? 'text-black bg-white': 'bg-gray-200 text-gray-400 cursor-not-allowed'} `}
            onClick={() => scroll('left')} 
            disabled={!canScrollLeft}>
              <FiChevronLeft className='text-2xl' />
            </button>
          <button 
            className={`p-2 rounded border ${canScrollRight? 'text-black bg-white': 'bg-gray-200 text-gray-400 cursor-not-allowed'} `}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}>
              <FiChevronRight className='text-2xl' />
            </button>
        </div>
      </div>
      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging? "cursor-grabbing" : 'cursor-grab'}`}>
        {newArrivals.map((arrival) => (
          <div key={arrival._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
            <img 
              src={arrival.images[0]?.url} 
              alt={arrival.images[0]?.altText || arrival.name} 
              className='w-full h-[500px] object-cover rounded-lg'
              draggable='false'/>
            <div className='absolute bottom-0 left-0 right-0 bg-transparent/50 backdrop-blur-md text-white p-4 rounded-b-lg'>
              <Link to={`/product/${arrival._id}`}>
                <h4 className='font-medium'>{arrival.name}</h4>
                <p className='mt-1'>{arrival.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals