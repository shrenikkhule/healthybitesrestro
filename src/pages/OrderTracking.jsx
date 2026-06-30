import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineTruck, AiOutlineCheckCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const OrderTracking = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Load orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
    if (savedOrders.length > 0) {
      setSelectedOrder(savedOrders[0]);
    }
  }, []);

  const getOrderStatus = (orderTime) => {
    const orderDate = new Date(orderTime);
    const currentTime = new Date();
    const minutesElapsed = Math.floor((currentTime - orderDate) / (1000 * 60));

    if (minutesElapsed < 5) return { status: 'Confirmed', step: 1 };
    if (minutesElapsed < 15) return { status: 'Preparing', step: 2 };
    if (minutesElapsed < 25) return { status: 'Ready for Pickup', step: 3 };
    return { status: 'Delivered', step: 4 };
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">No Orders Found</h1>
          <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            <AiOutlineArrowLeft size={20} />
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const currentOrder = selectedOrder || orders[0];
  const orderStatus = getOrderStatus(currentOrder.timestamp);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
          >
            <AiOutlineArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Order Tracking</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Orders</h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {orders.map((order, index) => (
                  <button
                    key={order.orderId}
                    onClick={() => setSelectedOrder(order)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentOrder.orderId === order.orderId
                        ? 'bg-green-100 border-2 border-green-500'
                        : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    <p className="font-semibold text-gray-800">{order.orderId}</p>
                    <p className="text-sm text-gray-600">{formatDate(order.timestamp)}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Order Details and Tracking */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Timeline */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Status</h2>

              {/* Timeline */}
              <div className="relative">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex mb-6 last:mb-0">
                    {/* Line */}
                    {step < 4 && (
                      <div
                        className={`w-1 mr-6 rounded transition-colors ${
                          orderStatus.step >= step ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      ></div>
                    )}
                    {step === 4 && <div className="w-1 mr-6 bg-gray-300"></div>}

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                            orderStatus.step >= step
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-300 text-gray-500'
                          }`}
                        >
                          {orderStatus.step >= step ? (
                            <AiOutlineCheckCircle size={20} />
                          ) : (
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {step === 1 && 'Order Confirmed'}
                            {step === 2 && 'Preparing Your Order'}
                            {step === 3 && 'Ready for Pickup'}
                            {step === 4 && 'Delivered'}
                          </p>
                          <p className="text-sm text-gray-600">
                            {step === 1 && 'Your order has been confirmed'}
                            {step === 2 && 'We are preparing your delicious meal'}
                            {step === 3 && 'Your order is ready to pick up'}
                            {step === 4 && 'Order delivered successfully'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Status */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">
                  Current Status: <span className="text-lg">{orderStatus.status}</span>
                </p>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Details</h2>

              {/* Items */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Items</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {currentOrder.items.map((item) => (
                    <div key={item.id} className="flex justify-between text-gray-700">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-4" />

              {/* Customer Info */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Delivery Address</h3>
                <p className="text-gray-700">
                  {currentOrder.customerInfo.firstName} {currentOrder.customerInfo.lastName}
                </p>
                <p className="text-gray-700">{currentOrder.customerInfo.address}</p>
                <p className="text-gray-700">
                  {currentOrder.customerInfo.city}, {currentOrder.customerInfo.state}{' '}
                  {currentOrder.customerInfo.zipCode}
                </p>
              </div>

              <hr className="my-4" />

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-green-600">${currentOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;