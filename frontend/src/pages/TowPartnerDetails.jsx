import React from 'react';

const TowPartnerDetails = () => {
  const mechanicsData = [
    { id: 1, name: 'Yash', shopName: "Towing Drivers", phone: '123-456-7890', address: '123 Main St, Springfield, IL', rating: 4.5 },
    { id: 2, name: 'Jack', shopName: "Towing Drivers", phone: '987-654-3210', address: '456 Elm St, Springfield, IL', rating: 4.2 },
    { id: 3, name: 'Johnson', shopName: "Towing Drivers", phone: '654-321-9870', address: '789 Oak St, Springfield, IL', rating: 4.7 },
    { id: 4, name: 'Gaurang', shopName: "Towing Drivers", phone: '321-654-0987', address: '101 Maple St, Springfield, IL', rating: 4.0 },
    { id: 5, name: 'Robert', shopName: "Towing Drivers", phone: '111-222-3333', address: '202 Pine St, Springfield, IL', rating: 4.8 },
    { id: 6, name: 'Green', shopName: "Towing Drivers", phone: '444-555-6666', address: '303 Birch St, Springfield, IL', rating: 4.3 },
    { id: 7, name: 'David', shopName: "Towing Drivers", phone: '555-666-7777', address: '404 Cedar St, Springfield, IL', rating: 4.6 },
    { id: 8, name: 'Sharma', shopName: "Towing Drivers", phone: '777-888-9999', address: '505 Willow St, Springfield, IL', rating: 4.1 },
  ];

  return (
    <div className="py-10 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Tow Service Provider</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mechanicsData.map((mechanic) => (
            <div key={mechanic.id} className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="flex flex-col items-center">
                {/* Mechanic Name and Shop Name */}
                <h2 className="text-2xl font-semibold text-gray-800">{mechanic.name}</h2>
                <h3 className="text-xl text-gray-600 mb-4">{mechanic.shopName}</h3>

                {/* Mechanic Info */}
                <div className="text-gray-700 space-y-2">
                  <p><span className="font-semibold">Address: </span>{mechanic.address}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default TowPartnerDetails;
