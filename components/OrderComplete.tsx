import React from "react";

const order = {
  orderNumber: 13119,
  orderDate: "27/10/2023",
  orderTotal: 81.4,
  orderPaymentMethod: "Direct Bank Transfer",
};

const OrderComplete = () => {
  return (
    <div className="space-y-9">
      <OrderLabel />
      <OrderHeading />
      <OrderDetails />
    </div>
  );
};

export default OrderComplete;

const OrderLabel = () => {
  return (
    <div>
      <div className="text-center">
        <Check className="mx-auto" />
        <h3 className="mb-2 text-[35px] font-medium">
          Your order is completed!
        </h3>
        <p className="text-sm text-gray-500">
          Thank you. Your order has been received.
        </p>
      </div>
    </div>
  );
};

const OrderHeading = () => {
  return (
    <div className="mx-auto flex max-w-4xl border-2 border-dashed border-gray-500 p-10">
      <div className="flex-1">
        <div className="text-sm capitalize text-gray-500">Order Number</div>
        <div className="text-base font-medium">{order.orderNumber}</div>
      </div>
      <div className="flex-1">
        <div className="text-sm capitalize text-gray-500">Date</div>
        <div className="text-base font-medium">{order.orderDate}</div>
      </div>
      <div className="flex-1">
        <div className="text-sm capitalize text-gray-500">Total</div>
        <div className="text-base font-medium">{order.orderTotal}</div>
      </div>
      <div className="flex-1">
        <div className="text-sm capitalize text-gray-500">Payment Method</div>
        <div className="text-base font-medium">{order.orderPaymentMethod}</div>
      </div>
    </div>
  );
};

const OrderDetails = () => {
  return (
    <div className="mx-auto max-w-4xl border border-primary p-10">
      <h3 className="font-medium">ORDER DETAILS</h3>
    </div>
  );
};

const Check = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="40" fill="#B9A16B"></circle>
      <path
        d="M52.9743 35.7612C52.9743 35.3426 52.8069 34.9241 52.5056 34.6228L50.2288 32.346C49.9275 32.0446 49.5089 31.8772 49.0904 31.8772C48.6719 31.8772 48.2533 32.0446 47.952 32.346L36.9699 43.3449L32.048 38.4062C31.7467 38.1049 31.3281 37.9375 30.9096 37.9375C30.4911 37.9375 30.0725 38.1049 29.7712 38.4062L27.4944 40.683C27.1931 40.9844 27.0257 41.4029 27.0257 41.8214C27.0257 42.24 27.1931 42.6585 27.4944 42.9598L33.5547 49.0201L35.8315 51.2969C36.1328 51.5982 36.5513 51.7656 36.9699 51.7656C37.3884 51.7656 37.8069 51.5982 38.1083 51.2969L40.385 49.0201L52.5056 36.8996C52.8069 36.5982 52.9743 36.1797 52.9743 35.7612Z"
        fill="white"
      ></path>
    </svg>
  );
};
