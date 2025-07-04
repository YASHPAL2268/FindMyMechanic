import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate hook from react-router-dom

const VehiclePanel = (props) => {
  const navigate = useNavigate();  // Hook to navigate to different pages

  return (
    <div
      className="mt-6 mb-6 bg-white p-10 rounded-3xl"
      style={{
        maxHeight: '80vh',
        overflowY: 'auto',
      }}
    >
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose Service</h3>

      <div
        onClick={() => navigate('/mechanic')}  // Navigate to mechanic page
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">Find Mechanic</h4>
          <p className="font-normal text-xs text-gray-600">
            Locate nearby mechanics to assist with vehicle issues.
          </p>
        </div>
        <h2 className="text-lg font-semibold">View</h2>
      </div>

      <div
        onClick={() => navigate('/petrol')}  // Navigate to petrol partner page
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">Find Petrol Partner</h4>
          <p className="font-normal text-xs text-gray-600">
            Find petrol supply services nearby.
          </p>
        </div>
        <h2 className="text-lg font-semibold">View</h2>
      </div>

      <div
        onClick={() => navigate('/tow')}  // Navigate to tow partner page
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">Find Tow Partner</h4>
          <p className="font-normal text-xs text-gray-600">
            Get towing services for your vehicle.
          </p>
        </div>
        <h2 className="text-lg font-semibold">View</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
