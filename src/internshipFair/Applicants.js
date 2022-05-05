import React from "react";
import InfoPage from "./InfoPage";
import { useEffect } from "react";
import axios from "axios";

const token = localStorage.getItem("token");

var config = {
  method: "get",
  url: "https://djacmdev.pythonanywhere.com/if/job-create",
  headers: {
    Authorization: `Token ${token}`,
  },
};

const Applicants = () => {
  const [value, setValue] = React.useState([]);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setValue(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{ padding: "4% 11%", backgroundColor: "white", color: "black" }}
    >
      {/* {value.map((row) => ( */}
          <h2 className="aplHead">jo{value.role}</h2>
          <h2 className="aplData">No. of Applicants: {value.num_of_applications}</h2>
          <br />
      {/* ))} */}

      <InfoPage />
    </div>
  );
};

export default Applicants;
