import { Outlet } from "react-router-dom";
import Contact from "./Contact";

const About = () => {
  return (
    <>
      <h2>
        This is about Us pages, All the info here is reletd to About us page
      </h2>
      <Outlet />
      {/* {<Contact name={"Ashok Vavare"} />} */}
    </>
  );
};

export default About;
