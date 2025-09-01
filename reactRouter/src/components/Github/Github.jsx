import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Anti-sin")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="p-6 flex flex-col text-center m-4 bg-gray-600 text-white text-3xl">
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} 
      className="rounded-full self-center p-5"
      />
    </div>
  );
}

export default Github;
