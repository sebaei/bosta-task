import React from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="details-table">
      <h4>{t("table.title")}</h4>
      <table>
        <thead>
          <tr>
            <th>{t("table.header.firstCol")}</th>
            <th>{t("table.header.secondCol")}</th>
            <th>{t("table.header.thirdCol")}</th>
            <th>{t("table.header.fourthCol")}</th>
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

export default Info;
