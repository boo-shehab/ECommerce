import { useState } from "react";
import { useNavigate } from "react-router-dom"

const cart = {
    products: [
        {
            name: 'stylish jacket',
            size: 'M',
            price: 120,
            color: 'Black',
            image: 'https://picsum.photos/150?random=1'
        },
        {
            name: 'Casual sneakers',
            size: '43',
            price: 75,
            color: 'white',
            image: 'https://picsum.photos/150?random=2'
        }
    ],
    totalPrice: 195
}
const Checkout = () => {
    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city:'',
        postalCode: '',
        country: '',
        phone: ''
    })
    const handleCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId(123)
        navigate('/order-confirmation')
    }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl uppercase mb-6">Checkout</h2>
            <form onSubmit={handleCreateCheckout}>
                <h3 className="text-lg mb-4">Contact details</h3>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input 
                        type="email" 
                        className="w-full p-2 border rounded"
                        value='user@example.com'
                        disabled 
                    />
                </div>
                <h3 className="text-2xl uppercase mb-6">Delivery</h3>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">First Name</label>
                        <input 
                            type="text"
                            value={shippingAddress.firstName}
                            onChange={(e) => setShippingAddress({...shippingAddress, firstName: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Last Name</label>
                        <input 
                            type="text"
                            value={shippingAddress.lastName}
                            onChange={(e) => setShippingAddress({...shippingAddress, lastName: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <input 
                        type="text" 
                        value={shippingAddress.address}
                        onChange={(e) => setShippingAddress({...shippingAddress, address: e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">City</label>
                        <input 
                            type="text"
                            value={shippingAddress.city}
                            onChange={(e) => setShippingAddress({...shippingAddress, city: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Postal Code</label>
                        <input 
                            type="text"
                            value={shippingAddress.postalCode}
                            onChange={(e) => setShippingAddress({...shippingAddress, postalCode: e.target.value})}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">country</label>
                    <input 
                        type="text" 
                        value={shippingAddress.country}
                        onChange={(e) => setShippingAddress({...shippingAddress, country: e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone</label>
                    <input 
                        type="tel" 
                        value={shippingAddress.phone}
                        onChange={(e) => setShippingAddress({...shippingAddress, phone: e.target.value})}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    {!checkoutId? (
                        <button type="submit" className="bg-black text-white rounded w-full py-3">Continue to payment</button>
                    ): (
                        <div>
                            <h3 className="text-lg mb-4">pay with paypal</h3>
                        </div>
                    )}
                </div>
            </form>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg mb-4">Order summary</h3>
            <div className="border-t py-6 mb-4">
                
                {cart.products.map((product, index) => (
                    <div key={index} className="flex items-start justify-between py-2 border-b">
                        <div className="flex items-start">
                            <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4"/>
                            <div>
                                <h3 className="text-md">{product.name}</h3>
                                <p className="text-gray-500">size: {product.size}</p>
                                <p className="text-gray-500">color: {product.color}</p>
                            </div>
                        </div>
                        <p className="text-xl">${product.price?.toString()}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center text-lg mb-4">
                <p>Subtotal</p>
                <p>${cart.totalPrice?.toString()}</p>
            </div>
            <div className="flex justify-between items-center text-lg">
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <div className="flex justify-between items-center text-lg border-t pt-4">
                <p>Total</p>
                <p>${cart.totalPrice?.toString()}</p>
            </div>
        </div>
    </div>
  )
}

export default Checkout