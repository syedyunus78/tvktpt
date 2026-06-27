import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { PiMapPinAreaBold } from "react-icons/pi";

const HomeMenubar = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerRef = useRef(null);

  const pickupWrapperRef = useRef(null);
  const dropWrapperRef = useRef(null);

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");


  const [tripType, setTripType] = useState("transfer");
  const [selectingFor, setSelectingFor] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropCoords, setDropCoords] = useState(null);
  
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

const getCurrentTime = () => {
  const now = new Date();
  return now.toTimeString().slice(0, 5); // HH:MM format
};


 const [date, setDate] = useState(getTodayDate());
const [time, setTime] = useState(getCurrentTime());
  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pickupWrapperRef.current &&
        !pickupWrapperRef.current.contains(event.target) &&
        dropWrapperRef.current &&
        !dropWrapperRef.current.contains(event.target)
      ) {
        setActiveField(null);
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ================= MAP INIT (ONLY WHEN OPEN) ================= */
  useEffect(() => {
    if (!showMap) return;
    if (mapInstance.current) return;
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([21.4858, 39.1925], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    map.on("click", async (e) => {
      const { lat, lng } = e.latlng;

      if (markerRef.current) markerRef.current.remove();

      const marker = L.marker([lat, lng]).addTo(map);
      markerRef.current = marker;

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();

        if (data.display_name) {
          marker.bindPopup(data.display_name).openPopup();
        }
      } catch (err) {
        console.error("Reverse geocode error:", err);
      }
    });

    mapInstance.current = map;

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [showMap]);

  /* ================= OPEN MAP ================= */
  const openMapFor = (type) => {
    setSelectingFor(type);
    setActiveField(null);
    setShowMap(true);
  };

  /* ================= CONFIRM LOCATION ================= */
  const handleConfirm = () => {
    if (!markerRef.current) {
      alert("Please select a location on the map");
      return;
    }

    const { lat, lng } = markerRef.current.getLatLng();
    const address =
      markerRef.current.getPopup()?.getContent() || "Selected Location";

    if (selectingFor === "pickup") {
      setPickup(address);
      setPickupCoords({ lat, lng });
    }

    if (selectingFor === "drop") {
      setDrop(address);
      setDropCoords({ lat, lng });
    }

    setShowMap(false);
  };

  /* ================= DISTANCE ================= */
  const calculateDistanceKm = (coord1, coord2) => {
    const R = 6371;
    const dLat = ((coord2.lat - coord1.lat) * Math.PI) / 180;
    const dLng = ((coord2.lng - coord1.lng) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((coord1.lat * Math.PI) / 180) *
        Math.cos((coord2.lat * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2);
  };

  /* ================= SEARCH ================= */
  const handleSearch = () => {
    if (!pickup) return alert("Pickup is required");
    if (tripType !== "hour" && !drop) return alert("Drop is required");
    if (!date) return alert("Date is required");
    if (!time) return alert("Time is required");

    let distance = "N/A";

    if (tripType !== "hour") {
      if (!pickupCoords || !dropCoords) {
        alert("Please select pickup and drop from suggestions or map");
        return;
      }
      distance = calculateDistanceKm(pickupCoords, dropCoords);
    }

    setBookings((prev) => [
      ...prev,
      {
        tripType,
        pickup,
        drop: tripType === "hour" ? "N/A" : drop,
        date,
        time,
        distance,
      },
    ]);
  };

  /* ================= FETCH SUGGESTIONS ================= */
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!activeField) return;

      const query = activeField === "pickup" ? pickup : drop;
      if (!query || query.length < 3) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&countrycodes=sa&q=${query}`
        );
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        console.error("Search error:", err);
      }
    };

    const timer = setTimeout(fetchSuggestions, 500);
    return () => clearTimeout(timer);
  }, [pickup, drop, activeField]);

  /* ================= SELECT SUGGESTION ================= */
  const selectSuggestion = (item) => {
    const coords = { lat: Number(item.lat), lng: Number(item.lon) };

    if (activeField === "pickup") {
      setPickup(item.display_name);
      setPickupCoords(coords);
    }

    if (activeField === "drop") {
      setDrop(item.display_name);
      setDropCoords(coords);
    }

    setSuggestions([]);
    setActiveField(null);
  };



  return (
    <div className="menubookingContainer">
      <div className="bkn">
        {/* TRIP TYPE */}
        <div className="trip-type">
          {["transfer", "hour", "city"].map((type) => (
            <div
              key={type}
              className={`trip-option ${tripType === type ? "active" : ""}`}
              onClick={() => setTripType(type)}
            >
              {type === "hour"
                ? "Book by Hour"
                : type === "city"
                ? "City to City"
                : "Transfer"}
            </div>
          ))}
        </div>

        {/* PICKUP */}
       
    <div  ref={pickupWrapperRef} className="pickup-wrapper" style={{ position: "relative" }}>
  <input
    value={pickup}
    onFocus={() => setActiveField("pickup")}
    onChange={(e) => {
      setPickup(e.target.value);
      setPickupCoords(null); // reset coords if user types again
    }}
    placeholder="Pickup location"
    className="bkn-input"
  />

  {/* Clear Button */}
  {pickup && (
    <button
      type="button"
      className="clear-btn"
      onClick={() => {
        setPickup("");
        setPickupCoords(null);
        setSuggestions([]);
      }}
      aria-label="Clear pickup"
    >
      ✕
    </button>
  )}

  {/* Dropdown */}
  {activeField === "pickup" && (
    <div
      className="pickup-dropdown"
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        background: "#fff",
        border: "1px solid #ddd",
        maxHeight: "250px",
        overflowY: "auto",
        zIndex: 999,
      }}
    >
      {suggestions.length > 0 ? (
        suggestions.map((item) => (
          <div
            key={item.place_id}
            onClick={() => selectSuggestion(item)}
            style={{
              padding: "8px",
              cursor: "pointer",
              borderBottom: "1px solid #eee",
            }}
          >
            📍 {item.display_name}
          </div>
        ))
      ) : pickup.length >= 3 ? (
        <div style={{ padding: "8px", color: "#888" }}>
          No results found
        </div>
      ) : null}

      <div
        onClick={() => openMapFor("pickup")}
        style={{
          padding: "8px",
          cursor: "pointer",
          background: "#f9f9f9",
          fontWeight: "bold",
        }}
      >
         <PiMapPinAreaBold size={20} /> &nbsp;&nbsp;&nbsp;
  Choose from map
      </div>
    </div>
  )}
</div>

 &nbsp;&nbsp;&nbsp;


        {/* DROP */}
     
  <div ref={dropWrapperRef} className="pickup-wrapper" style={{ position: "relative" }}>
    <input
      value={drop}
      onFocus={() => setActiveField("drop")}
      onChange={(e) => {
        setDrop(e.target.value);
        setDropCoords(null); // reset coords if typing again
      }}
      placeholder="Drop location"
      className="bkn-input"
    />

    {/* Clear Button */}
    {drop && (
      <button
        type="button"
        className="clear-btn"
        onClick={() => {
          setDrop("");
          setDropCoords(null);
          setSuggestions([]);
        }}
        aria-label="Clear drop"
      >
        ✕
      </button>
    )}

    {/* Dropdown */}
    {activeField === "drop" && (
      <div
        className="pickup-dropdown"
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "#fff",
          border: "1px solid #ddd",
          maxHeight: "250px",
          overflowY: "auto",
          zIndex: 999,
        }}
      >
        {suggestions.length > 0 ? (
          suggestions.map((item) => (
            <div
              key={item.place_id}
              onClick={() => selectSuggestion(item)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              📍 {item.display_name}
            </div>
          ))
        ) : drop.length >= 3 ? (
          <div style={{ padding: "8px", color: "#888" }}>
            No results found
          </div>
        ) : null}

        <div
          onClick={() => openMapFor("drop")}
          style={{
            padding: "8px",
            cursor: "pointer",
            background: "#f9f9f9",
            fontWeight: "bold",
          }}
        >
          <PiMapPinAreaBold size={20} /> &nbsp;&nbsp;&nbsp;
  Choose from map
        </div>
      </div>
    )}
  </div>


 &nbsp;&nbsp;&nbsp;
        {/* DATE & TIME */}
        <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="bkn-input-two"
/>
         &nbsp;&nbsp;&nbsp;
       <input
  type="time"
  value={time}
  onChange={(e) => setTime(e.target.value)}
  className="bkn-input-two"
/>
 &nbsp;&nbsp;&nbsp;
        <button className="bkn-btn" onClick={handleSearch}>
          Search
        </button>

        {/* MAP */}
        <div
          className="map-container"
          style={{ display: showMap ? "block" : "none" }}
        >
          <div ref={mapRef} className="map-box"></div>

 <div className="map-footer">
          <div className="map-hint">
            Click on map to select {selectingFor} location
          </div>

          <button className="bkn-btn confirm" onClick={handleConfirm}>
            Confirm Location
          </button>
        </div>
      </div>
      </div>

      {/* TABLE */}
      {bookings.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ color: "#fff" }}>Booking Details</h3>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Trip</th>
                <th style={thStyle}>Pickup</th>
                <th style={thStyle}>Drop</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Time</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={i}>
                  <td style={tdStyle}>{b.tripType}</td>
                  <td style={tdStyle}>{b.pickup}</td>
                  <td style={tdStyle}>{b.drop}</td>
                  <td style={tdStyle}>{b.date}</td>
                  <td style={tdStyle}>{b.time}</td>
                  <td style={tdStyle}>
  {b.distance !== "N/A" ? `${b.distance} km` : "N/A"}
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

/* TABLE STYLES */
const tableStyle = {
  width: "100%",
  background: "#fff",
  borderCollapse: "collapse",
};

const thStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  background: "#f3f3f3",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

export default HomeMenubar;
