// import React  from 'react'


// const ConfirmRidePopUp = (props) => {

// return (
//         <div>
//             <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
//                 props.setRidePopupPanel(false)
//             }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
//             <h3 className='text-2xl font-semibold mb-5'>Confirm Request</h3>
//             <div className='flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4'>
//                 <div className='flex items-center gap-3 '>
//                     <img className='h-12 rounded-full object-cover w-12' src="https://tse1.mm.bing.net/th?id=OIP.mEma0ZcipymPAHIYoIuFiAHaJa&pid=Api&P=0&h=180" alt="" />
//                     {/* <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2> */}
//                     <h2 className='text-lg font-medium capitalize'>Yashu</h2>
//                 </div>
//                 <h5 className='text-lg font-semibold'>2.2 KM</h5>
//             </div>
//             <div className='flex gap-2 justify-between flex-col items-center'>
//                 <div className='w-full mt-5'>
//                     <div className='flex items-center gap-5 p-3 border-b-2'>
//                         <i className="ri-map-pin-user-fill"></i>
//                         <div>
//                             <h3 className='text-lg font-medium'>562/11-A</h3>
//                             {/* <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p> */}
//                             <p className='text-sm -mt-1 text-gray-600'>Ahmedabad</p>
//                         </div>
//                     </div>
//                     <div className='flex items-center gap-5 p-3 border-b-2'>
//                         <i className="text-lg ri-map-pin-2-fill"></i>
//                         <div>
//                             <h3 className='text-lg font-medium'>562/11-A</h3>
//                             {/* <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p> */}
//                                 <p className='text-sm -mt-1 text-gray-600'>Gandhinagar</p>
//                         </div>
//                     </div>
//                     <div className='flex items-center gap-5 p-3'>
//                         <i className="ri-currency-line"></i>
//                         <div>
//                             {/* <h3 className='text-lg font-medium'>₹{props.ride?.fare} </h3> */}
//                             <h3 className='text-lg font-medium'>₹193.20 </h3>
//                             <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='mt-6 w-full'>
//                     <form>
//                         <button className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</button>
//                         <button onClick={() => {
//                             props.setConfirmRidePopupPanel(false)
//                             props.setRidePopupPanel(false)

//                         }} className='w-full mt-2 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg'>Cancel</button>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ConfirmRidePopUp

import React from 'react';

const ConfirmRidePopUp = (props) => {
  // Function to handle opening the map
  const handleConfirm = () => {
    // Logic to open the map
    props.setConfirmRidePopupPanel(false); // Close the popup
    props.openMap(); // Trigger the map opening logic
  };

  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm Request</h3>
      <div className="flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="https://tse1.mm.bing.net/th?id=OIP.mEma0ZcipymPAHIYoIuFiAHaJa&pid=Api&P=0&h=180"
            alt=""
          />
          <h2 className="text-lg font-medium capitalize">Yashu</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Ahmedabad</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Gandhinagar</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20 </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form>
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full mt-2 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
