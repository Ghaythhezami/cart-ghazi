import React from 'react';

const ResumeCard = ({ photo, name, description, title, subTitle, result, des, logo }) => {
  return (
    <div className="w-full h-1/3 group flex">
      {/* Logo Section */}
      {logo && (
        <div className="relative w-20 h-20 bg-opacity-10 mt-8 flex-shrink-0 rounded-full overflow-hidden">
          <img 
            src={logo} 
            alt={`${name || title} logo`} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}
      
      {/* Content Section */}
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {name || title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {description || subTitle}
            </p>
          </div>
          {result && (
            <div>
              <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                {result}
              </p>
            </div>
          )}
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des || description}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard;
