const EventDetails = () => {
  return (
    <div className="translate-y-12 mx-auto w-full max-w-4xl px-4 -mt-24">
      <div className="rounded-xl bg-white p-6 shadow-lg">
        <div className="grid gap-6 md:gap-12 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-10 w-10 text-blue-600">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <div>
              <p className="text-sm text-gray-500">March 24-29,</p>
              <p className="font-semibold text-gray-800">2025</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-10 w-10 text-blue-600">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <p className="text-sm text-gray-500">312 Herbert Macaulay,</p>
              <p className="font-semibold text-gray-800">Sabo, Yaba, Lagos, Nigeria</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-10 w-10 text-blue-600">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div>
              <p className="text-sm text-gray-500">Application Deadline:</p>
              <p className="font-semibold text-gray-800">March 12, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;