import React, { useState } from 'react'

const EditProductPage = () => {
    const [productData, setProductData] = useState({
        _id: 234,
        name: 'jacket',
        description: 'some description',
        price: 100,
        countInStock: 0,
        sku: '',
        category: '',
        brand: '',
        sizes: [],
        colors: [],
        collection: '',
        material: '',
        gender: '',
        images: [
            {
                url: 'https://picsum.photos/150?random=1'
            },
            {
                url: 'https://picsum.photos/150?random=2'
            }
        ]

    })
    const handleChange = (e) => {
        setProductData({...productData, [e.target.name]: e.target.value})
    }
    const handleUploadImages = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(productData);
        
    }
  return (
    <div className='max-w-5xl mx-auto p-6 shadow-md rounded-md'>
        <h2 className='text-3xl font-bold mb-6'>Edit product</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Product Name</label>
                <input 
                    type="text"
                    name='name'
                    value={productData.name}
                    onChange={handleChange}
                    className='w-full border border-gray-300 rounded-md p-2'
                    required
                />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Description</label>
                <textarea
                    name='description'
                    value={productData.description}
                    onChange={handleChange}
                    className='w-full border border-gray-300 rounded-md p-2'
                    rows={4}
                    required
                />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Price</label>
                <input 
                    type="number"
                    name='price'
                    value={productData.price}
                    onChange={handleChange}
                    className='w-full border border-gray-300 rounded-md p-2'
                    required
                />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Count in stock</label>
                <input 
                    type="number"
                    name='countInStock'
                    value={productData.countInStock}
                    onChange={handleChange}
                    className='w-full border border-gray-300 rounded-md p-2'
                    required
                />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>SKU</label>
                <input 
                    type="number"
                    name='sku'
                    value={productData.sku}
                    onChange={handleChange}
                    className='w-full border border-gray-300 rounded-md p-2'
                    required
                />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>sizes (comma-separated)</label>
                <input 
                    type="text"
                    name='sizes'
                    value={productData.sizes.join(', ')}
                    onChange={(e) => setProductData({...productData, sizes: e.target.value.split(',').map(size => size.trim())})}
                    className='w-full border border-gray-300 rounded-md p-2'
                    required
                />
            </div>
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>Colors (comma-separated)</label>
                <input 
                    type="text"
                    name='colors'
                    value={productData.colors.join(', ')}
                    onChange={(e) => setProductData({...productData, colors: e.target.value.split(',').map(color => color.trim())})}
                    className='w-full border border-gray-300 rounded-md p-2'
                    required
                />
            </div>
            
            <div className='mb-6'>
                <label className='block font-semibold mb-2'>upload images</label>
                <input 
                    type="file"
                    name='images'
                    onChange={handleUploadImages}
                    className='w-full border border-gray-300 rounded-md p-2'
                    required
                />
                <div className='flex gap-4 mt-4'>
                    {productData.images.map((image, index) => (
                        <div key={index}>
                            <img src={image.url} alt={image.altText || 'product image'} className='w-20 h-20 object-cover rounded-md shadow-md' />
                        </div>
                    ))}
                </div>
            </div>
            <button type='submit' className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors'>
                Update Product
            </button>
        </form>
    </div>
  )
}

export default EditProductPage