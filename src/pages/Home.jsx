// src/pages/Home.jsx
const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1400')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold leading-tight">
              Find Trusted Service Providers Near You
            </h1>

            <p className="mb-5 text-lg">
              Electrician • Plumber • Cleaner • Home Repair —  
              everything you need in one platform!
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <a href="/services" className="btn btn-primary px-6">
                Explore Services
              </a>

              <a href="/register" className="btn btn-outline text-white px-6">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
