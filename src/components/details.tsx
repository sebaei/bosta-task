import React from "react";
import Address from "./address.tsx";
import Contact from "./contact-us.tsx";

const Details = () => {
  return (
    <section>
      <div>
        <h4>تفاصيل الشحنة</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>efef</th>
          </tr>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
            <td>19</td>
          </tr>
        </table>
      </div>
      <Address />
      <Contact />
    </section>
  );
};

export default Details;
