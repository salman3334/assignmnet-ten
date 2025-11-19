import { useEffect, useState } from "react";
import axios from "../axios/axios";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("/services").then((res) => setServices(res.data));
  }, []);

  return (
    <div className="p-6 grid md:grid-cols-3 gap-5">
      {services.map((s) => (
        <div key={s._id} className="card bg-base-200 shadow-lg p-5">
          <h3 className="text-xl font-bold">{s.name}</h3>
          <p>{s.description}</p>
          <p className="font-semibold mt-2">${s.price}</p>
          <Link to={`/booking/${s._id}`} className="btn btn-sm btn-primary mt-3">
            Book Now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
