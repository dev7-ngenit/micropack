export default function ProductSummary() {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      image: "https://placehold.co/100x100/E0E0E0/333333?text=Headphones",
      price: 199.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      image: "https://placehold.co/100x100/E0E0E0/333333?text=Speaker",
      price: 89.99,
      quantity: 2,
    },
    {
      id: 3,
      name: "USB-C Cable",
      image: "https://placehold.co/100x100/E0E0E0/333333?text=Cable",
      price: 24.99,
      quantity: 1,
    },
  ];

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Order Summary
      </h2>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-start space-x-4 rounded-lg bg-gray-50 p-4"
          >
            <div className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="h-16 w-16 rounded-md object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="mb-1 text-sm font-medium text-gray-900">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Qty: {product.quantity}
                </span>
                <div className="text-right">
                  <div className="text-sm text-gray-600">
                    ${product.price.toFixed(2)} each
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    ${(product.price * product.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="mb-2 flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>$404.97</span>
        </div>
        <div className="mb-2 flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>$9.99</span>
        </div>
        <div className="mb-4 flex justify-between text-sm text-gray-600">
          <span>Tax</span>
          <span>$37.25</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>
          <span>$452.21</span>
        </div>
      </div>
    </div>
  );
}
