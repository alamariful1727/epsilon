import React from 'react';

export const Counts = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start -m-2 mb-6">
      <div className="w-48 bg-gray-800 text-white px-3 py-4 m-2">
        <h6 className="">Total Earnings</h6>
        <p className="font-semibold text-xl">500000 BDT</p>
      </div>
      <div className="w-48 bg-gray-800 text-white px-3 py-4 m-2">
        <h6 className="">Total Completed Events</h6>
        <p className="font-semibold text-xl">135</p>
      </div>
      <div className="w-48 bg-gray-800 text-white px-3 py-4 m-2">
        <h6 className="">Pending Request</h6>
        <p className="font-semibold text-xl">50</p>
      </div>
      <div className="w-48 bg-gray-800 text-white px-3 py-4 m-2">
        <h6 className="">Upcoming Booking</h6>
        <p className="font-semibold text-xl">500</p>
      </div>
    </div>
  );
};
