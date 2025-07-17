// import React from 'react'

// const LocationSearchPanel = (props) => {

//     const location = [
//         "24,Near Kapoor's cafe,Bhopal",
//         "24,Near Malhotra's cafe,Bhopal",
//         "24,Near Shingania's cafe,Bhopal",
//         "24,Near Sharma's cafe,Bhopal",
//     ]
//   return (
//     <div>
//         {
//             location.map(function(elem,idx){
//                 return <div key={idx} onClick={()=>{
//                   props.setVehiclePanel(true)
//                   props.setPanelOpen(false)
//                 }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
//                 <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
//                 <h4 className='font-medium'>{elem}</h4>
//               </div>
//             })
//         }
      
      
//     </div>
//   )
// }

// export default LocationSearchPanel



import React, { useEffect, useRef, useState } from "react";
import VehiclePanel from "./VehiclePanel"; // Import the VehiclePanel component

const HereMap = () => {
  const mapRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isVehiclePanelOpen, setIsVehiclePanelOpen] = useState(false); // State for VehiclePanel visibility
  const mapInstance = useRef(null);
  const platformInstance = useRef(null);

  const apiKey = "YBPx0BAkvjY_aTmpRn8ttcro-Wn3AZ_YV8dqjGYwyKE";

  useEffect(() => {
    const platform = new H.service.Platform({
      apikey: apiKey,
    });
    platformInstance.current = platform;

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 51.505, lng: -0.09 },
      zoom: 13,
      pixelRatio: window.devicePixelRatio || 1,
    });
    mapInstance.current = map;

    const mapEvents = new H.mapevents.MapEvents(map);
    new H.mapevents.Behavior(mapEvents);

    return () => map.dispose();
  }, []);

  const handleSearch = async () => {
    if (!searchQuery) return;

    const geocodingService = platformInstance.current.getSearchService();
    geocodingService.geocode(
      { q: searchQuery },
      (result) => {
        if (result.items.length > 0) {
          const location = result.items[0].position;
          updateMap(location.lat, location.lng);
          setIsVehiclePanelOpen(true); // Open the VehiclePanel
        } else {
          alert("Location not found!");
        }
      },
      (error) => {
        console.error("Geocoding error:", error);
      }
    );
  };

  const handleSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const placesService = platformInstance.current.getSearchService();
    placesService.autosuggest(
      {
        q: query,
        at: "51.505,-0.09",
      },
      (result) => {
        setSuggestions(result.items || []);
      },
      (error) => {
        console.error("Autosuggest error:", error);
      }
    );
  };

  const updateMap = (lat, lng) => {
    const map = mapInstance.current;

    map.removeObjects(map.getObjects());

    const marker = new H.map.Marker({ lat, lng });
    map.addObject(marker);

    const circle = new H.map.Circle({ lat, lng }, 7000, {
      style: {
        strokeColor: "rgba(69, 133, 196, 0.5)",
        lineWidth: 2,
        fillColor: "rgba(0, 128, 255, 0.2)",
      },
    });
    map.addObject(circle);

    map.setCenter({ lat, lng });
    map.setZoom(12);
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 1000,
          width: "100%",
          maxWidth: "300px",
        }}
      >
        <input
          type="text"
          placeholder="Search location..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSuggestions(e.target.value);
          }}
          style={{
            padding: "8px",
            width: "100%",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "8px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "8px",
            width: "100%",
            backgroundColor: "#0078D7",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Search Service
        </button>

        {suggestions.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "8px 0 0",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "white",
              maxHeight: "150px",
              overflowY: "auto",
              position: "relative",
              width: "100%",
            }}
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => {
                  setSearchQuery(suggestion.title);
                  updateMap(suggestion.position.lat, suggestion.position.lng);
                  setSuggestions([]);
                }}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
              >
                {suggestion.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        ref={mapRef}
        style={{ width: "100%", height: "100%", position: "relative" }}
      />

      
      {isVehiclePanelOpen && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1100,
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <VehiclePanel
            setVehiclePanel={setIsVehiclePanelOpen} // Pass state handler to close the panel
            setConfirmRidePanel={() => console.log("Confirm ride handler")} // Placeholder function
          />
        </div>
      )}
    </div>
  );
};

export default HereMap;
