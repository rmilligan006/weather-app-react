import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Toronto",
    },
    {
      id: 2,
      title: "Montreal",
    },
    {
      id: 3,
      title: "Boston",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Vancouver",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6 sm:flex flex-wrap">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
