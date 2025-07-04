// import React from 'react';

// const PetrolPartnerDetails = () => {
//   const mechanicsData = [
//     { id: 1, name: 'John Doe', shopName: "HP Petroleum", phone: '123-456-7890', address: '123 Main St, Springfield, IL', rating: 4.5 },
//     { id: 2, name: 'Jane Smith', shopName: "Reliance", phone: '987-654-3210', address: '456 Elm St, Springfield, IL', rating: 4.2 },
//     { id: 3, name: 'Mike Johnson', shopName: "Bharat Petroleum", phone: '654-321-9870', address: '789 Oak St, Springfield, IL', rating: 4.7 },
//     { id: 4, name: 'Emily Davis', shopName: "Indian Oil", phone: '321-654-0987', address: '101 Maple St, Springfield, IL', rating: 4.0 },
//     { id: 5, name: 'Robert Brown', shopName: "Reliance", phone: '111-222-3333', address: '202 Pine St, Springfield, IL', rating: 4.8 },
//     { id: 6, name: 'Linda Green', shopName: "HP Petroleum", phone: '444-555-6666', address: '303 Birch St, Springfield, IL', rating: 4.3 },
//     { id: 7, name: 'David White', shopName: "Bharat Petroleum", phone: '555-666-7777', address: '404 Cedar St, Springfield, IL', rating: 4.6 },
//     { id: 8, name: 'Sarah Blue', shopName: "HP Petroleum", phone: '777-888-9999', address: '505 Willow St, Springfield, IL', rating: 4.1 },
//   ];

//   return (
//     <div className="py-10 bg-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Trusted Fuel Suppliers</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {mechanicsData.map((mechanic) => (
//             <div key={mechanic.id} className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
//               <div className="flex flex-col items-center">
//                 {/* Mechanic Name and Shop Name */}
//                 <h2 className="text-2xl font-semibold text-gray-800">{mechanic.name}</h2>
//                 <h3 className="text-xl text-gray-600 mb-4">{mechanic.shopName}</h3>

//                 {/* Mechanic Info */}
//                 <div className="text-gray-700 space-y-2">
//                   <p><span className="font-semibold">Address: </span>{mechanic.address}</p>
//                   <p><span className="font-semibold">Phone: </span><a href={`tel:${mechanic.phone}`} className="text-blue-500">{mechanic.phone}</a></p>
//                   <p><span className="font-semibold">Rating: </span>{'⭐'.repeat(Math.floor(mechanic.rating))}{'☆'.repeat(5 - Math.floor(mechanic.rating))}</p>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex justify-center gap-4 mt-6">
//                 <button
//                     onClick={() => window.location.href = `tel:${mechanic.phone}`}
//                     className="px-6 h-10 py-2 bg-[#CD1B3C] text-white  shadow-md hover:bg-green-700 transition duration-300"
//                   >
//                     Call
//                   </button>
//                   <button
//                     onClick={() => window.location.href = `#`}
//                     className="w-30 h-10 px-6 py-2 bg-[#214184] text-white shadow-md hover:bg-gray-600 transition duration-300"
//                   >
//                     Book
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PetrolPartnerDetails;


// import React, { useState, useEffect } from 'react';

// // Function to calculate the distance between two geographical points (in km)
// const calculateDistance = (lat1, lon1, lat2, lon2) => {
//   const R = 6371; // Radius of the Earth in km
//   const dLat = (lat2 - lat1) * (Math.PI / 180);  // Convert to radians
//   const dLon = (lon2 - lon1) * (Math.PI / 180);
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
//     Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c; // Distance in km
// };

// const PetrolPartnerDetails = () => {
//   const [userLocation, setUserLocation] = useState(null);

//   const mechanicsData = [
//     { id: 1, name: 'John Doe', shopName: "HP Petroleum", phone: '123-456-7890', address: '123 Main St, Springfield, IL', lat: 39.7817, lon: -89.6501, rating: 4.5 },
//     { id: 2, name: 'Jane Smith', shopName: "Reliance", phone: '987-654-3210', address: '456 Elm St, Springfield, IL', lat: 39.7999, lon: -89.6431, rating: 4.2 },
//     { id: 3, name: 'Mike Johnson', shopName: "Bharat Petroleum", phone: '654-321-9870', address: '789 Oak St, Springfield, IL', lat: 39.7997, lon: -89.6430, rating: 4.7 },
//     { id: 4, name: 'Emily Davis', shopName: "Indian Oil", phone: '321-654-0987', address: '101 Maple St, Springfield, IL', lat: 39.7720, lon: -89.6505, rating: 4.0 },
//     { id: 5, name: 'Robert Brown', shopName: "Reliance", phone: '111-222-3333', address: '202 Pine St, Springfield, IL', lat: 39.7995, lon: -89.6463, rating: 4.8 },
//     { id: 6, name: 'Linda Green', shopName: "HP Petroleum", phone: '444-555-6666', address: '303 Birch St, Springfield, IL', lat: 39.7912, lon: -89.6500, rating: 4.3 },
//     { id: 7, name: 'David White', shopName: "Bharat Petroleum", phone: '555-666-7777', address: '404 Cedar St, Springfield, IL', lat: 39.7816, lon: -89.6502, rating: 4.6 },
//     { id: 8, name: 'Sarah Blue', shopName: "HP Petroleum", phone: '777-888-9999', address: '505 Willow St, Springfield, IL', lat: 39.7837, lon: -89.6472, rating: 4.1 },
//   ];

//   // Get user's current location
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ latitude, longitude });
//         },
//         (error) => {
//           console.error('Error getting location', error);
//         }
//       );
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   }, []);

//   return (
//     <div className="py-10 bg-gray-100 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Trusted Fuel Suppliers</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {mechanicsData.map((mechanic) => {
//             let distance = null;

//             // Calculate the distance if the user's location is available
//             if (userLocation) {
//               distance = calculateDistance(
//                 userLocation.latitude,
//                 userLocation.longitude,
//                 mechanic.lat,
//                 mechanic.lon
//               ).toFixed(2); // Distance in km
//             }

//             return (
//               <div key={mechanic.id} className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
//                 <div className="flex flex-col items-center">
//                   {/* Mechanic Name and Shop Name */}
//                   <h2 className="text-2xl font-semibold text-gray-800">{mechanic.name}</h2>
//                   <h3 className="text-xl text-gray-600 mb-4">{mechanic.shopName}</h3>

//                   {/* Mechanic Info */}
//                   <div className="text-gray-700 space-y-2">
//                     <p><span className="font-semibold">Address: </span>{mechanic.address}</p>
//                     {/* Show the calculated distance if available */}
//                     {distance && <p><span className="font-semibold">Distance: </span>{distance} km away</p>}
//                     <p><span className="font-semibold">Phone: </span><a href={`tel:${mechanic.phone}`} className="text-blue-500">{mechanic.phone}</a></p>
//                     <p><span className="font-semibold">Rating: </span>{'⭐'.repeat(Math.floor(mechanic.rating))}{'☆'.repeat(5 - Math.floor(mechanic.rating))}</p>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex justify-center gap-4 mt-6">
//                     <button
//                       onClick={() => window.location.href = `tel:${mechanic.phone}`}
//                       className="px-6 h-10 py-2 bg-[#CD1B3C] text-white  shadow-md hover:bg-green-700 transition duration-300"
//                     >
//                       Call
//                     </button>
//                     <button
//                       onClick={() => window.location.href = `#`}
//                       className="w-30 h-10 px-6 py-2 bg-[#214184] text-white shadow-md hover:bg-gray-600 transition duration-300"
//                     >
//                       Book
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PetrolPartnerDetails;


import React, { useState, useEffect } from 'react';

// Function to calculate the distance between two geographical points (in km)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);  // Convert to radians
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const PetrolPartnerDetails = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const mechanicsData = [
    { id: 1, name: 'John Doe', shopName: "HP Petroleum", phone: '123-456-7890', address: '123 Main St, Springfield, IL', lat: 39.7817, lon: -89.6501, rating: 4.5 },
    { id: 2, name: 'Jane Smith', shopName: "Reliance", phone: '987-654-3210', address: '456 Elm St, Springfield, IL', lat: 39.7999, lon: -89.6431, rating: 4.2 },
    { id: 3, name: 'Mike Johnson', shopName: "Bharat Petroleum", phone: '654-321-9870', address: '789 Oak St, Springfield, IL', lat: 39.7997, lon: -89.6430, rating: 4.7 },
    { id: 4, name: 'Emily Davis', shopName: "Indian Oil", phone: '321-654-0987', address: '101 Maple St, Springfield, IL', lat: 39.7720, lon: -89.6505, rating: 4.0 },
    { id: 5, name: 'Robert Brown', shopName: "Reliance", phone: '111-222-3333', address: '202 Pine St, Springfield, IL', lat: 39.7995, lon: -89.6463, rating: 4.8 },
    { id: 6, name: 'Linda Green', shopName: "HP Petroleum", phone: '444-555-6666', address: '303 Birch St, Springfield, IL', lat: 39.7912, lon: -89.6500, rating: 4.3 },
    { id: 7, name: 'David White', shopName: "Bharat Petroleum", phone: '555-666-7777', address: '404 Cedar St, Springfield, IL', lat: 39.7816, lon: -89.6502, rating: 4.6 },
    { id: 8, name: 'Sarah Blue', shopName: "HP Petroleum", phone: '777-888-9999', address: '505 Willow St, Springfield, IL', lat: 39.7837, lon: -89.6472, rating: 4.1 },
  ];

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleInfoClick = (mechanic) => {
    setSelectedLocation(mechanic);
  };

  const closeModal = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="py-10 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Trusted Fuel Suppliers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mechanicsData.map((mechanic) => {
            let distance = null;

            // Calculate the distance if the user's location is available
            if (userLocation) {
              distance = calculateDistance(
                userLocation.latitude,
                userLocation.longitude,
                mechanic.lat,
                mechanic.lon
              ).toFixed(2); // Distance in km
            }

            return (
              <div key={mechanic.id} className="bg-white shadow-lg rounded-lg p-6 relative">
                {/* Info Button */}
                <button
                  onClick={() => handleInfoClick(mechanic)}
                  className="absolute top-2 right-2 bg-[#214184] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700"
                >
                  !
                </button>
                <div className="flex flex-col items-center">
                  {/* Mechanic Name and Shop Name */}
                  <h2 className="text-2xl font-semibold text-gray-800">{mechanic.name}</h2>
                  <h3 className="text-xl text-gray-600 mb-4">{mechanic.shopName}</h3>

                  {/* Mechanic Info */}
                  <div className="text-gray-700 space-y-2">
                    <p><span className="font-semibold">Address: </span>{mechanic.address}</p>
                    {/* Show the calculated distance if available */}
                    {distance && <p><span className="font-semibold">Distance: </span>{distance} km away</p>}
                    <p><span className="font-semibold">Phone: </span><a href={`tel:${mechanic.phone}`} className="text-blue-500">{mechanic.phone}</a></p>
                    <p><span className="font-semibold">Rating: </span>{'⭐'.repeat(Math.floor(mechanic.rating))}{'☆'.repeat(5 - Math.floor(mechanic.rating))}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      onClick={() => window.location.href = `tel:${mechanic.phone}`}
                      className="px-6 h-10 py-2 bg-[#CD1B3C] text-white shadow-md hover:bg-green-700 transition duration-300"
                    >
                      Call
                    </button>
                    <button
                      onClick={() => window.location.href = `#`}
                      className="w-30 h-10 px-6 py-2 bg-[#214184] text-white shadow-md hover:bg-gray-600 transition duration-300"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Map */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">{selectedLocation.shopName}</h2>
            <iframe
              title="map"
              width="100%"
              height="300"
              src={`https://www.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lon}&hl=es;z=14&output=embed`}
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetrolPartnerDetails;

