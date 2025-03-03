const ApplySection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-8 p-4 md:p-10 bg-[#EBF3FF]">
    
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg flex flex-col items-center text-center w-full md:w-64 max-w-xs">
        <div className="text-sky-500 text-4xl mb-4">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
          </svg>
        </div>
        <p className="text-gray-600 text-sm md:text-base">To apply as a <strong>Individual</strong>, click here</p>
        <button className="mt-4 px-6 py-2 cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2 w-full md:w-auto justify-center">
          Individual <span className="text-lg">→</span>
        </button>
      </div>
      
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg flex flex-col items-center text-center w-full md:w-64 max-w-xs">
        <div className="text-sky-500 text-4xl mb-4">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
          </svg>
        </div>
        <p className="text-gray-600 text-sm md:text-base">To apply as a <strong>Team</strong>, click here</p>
        <button className="mt-4 px-6 py-2 cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2 w-full md:w-auto justify-center">
          Team <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default ApplySection;