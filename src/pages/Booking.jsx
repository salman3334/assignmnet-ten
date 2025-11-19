import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios/axios";

const Booking = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios.get(`/services/${id}`).then((res) => setService(res.data));
  }, []);

  const handleBooking = () => {
    axios.post("/bookings", { serviceId: id }).then(() => {
      alert("Booking Successful!");
    });
  };

  return (
    <div className="p-6">
      {service && (
        <>
          <h2 className="text-2xl font-bold">{service.name}</h2>
          <p>{service.description}</p>
          <p className="font-semibold mt-2">${service.price}</p>

          <button onClick={handleBooking} className="btn btn-primary mt-4">
            Confirm Booking
          </button>
        </>
      )}
    </div>
  );
};

export default Booking;
