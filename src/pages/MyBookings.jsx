import { useEffect, useState } from "react";
import axios from "../axios/axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/bookings/my").then((res) => setBookings(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-3">My Bookings</h2>

      {bookings.map((b) => (
        <div key={b._id} className="border p-4 mb-3 rounded">
          <h3 className="text-xl font-semibold">{b.serviceName}</h3>
          <p>Date: {b.date}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
