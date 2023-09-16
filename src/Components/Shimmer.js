import React from 'react'

const Shimmer = () => {
  return (
    <>
      <div className="p-2 w-auto h-10 md:h-10 bg-slate-200 rounded-md animate-pulse m-2"></div>
      <div className="flex flex-wrap justify-center items-center m-4">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="flex flex-wrap w-60 h-80 p-3 m-6 shadow-2xl bg-slate-200 rounded-md animate-pulse"
            >
              <div className="w-full h-30 bg-slate-200 animate-pulse rounded-md"></div>
              <h3 className="w-full h-40 bg-slate-300 my-3 rounded-md"></h3>
              <h3 className="w-full h-6 bg-slate-300 my-3 rounded-md"></h3>
              <h4 className="w-3/4 h-4 bg-slate-300 rounded-md"></h4>
              <div className="w-full mt-4 mb-2 h-8 grid grid-cols-3 gap-4">
                <div className="h-6 bg-slate-300 rounded col-span-1"></div>
                <div className="h-6  bg-slate-200 rounded col-span-1"></div>
                <div className="h-6 bg-slate-200 rounded col-span-1"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Shimmer