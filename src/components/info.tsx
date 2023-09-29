import React from "react";

const info = () => {
  return (
    <div className="details-table">
      <h4>تفاصيل الشحنة</h4>
      <table>
        <thead>
          <tr>
            <th>الفرع</th>
            <th>التاريخ</th>
            <th>الوقت</th>
            <th>تفاصيل</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default info;
