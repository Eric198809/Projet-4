import { useState } from "react";
import Publier from "../Components/Publier";
import MesInfos from "../Components/MesInfos";

import "../Style/monEspace.scss";

const MonEspace = () => {
  const [selectMenu, setSelectMenu] = useState("");

  const menus = [
    { id: 1, value: "MES INFOS" },
    { id: 2, value: "PUBLIER" },
  ];

  let content;
  switch (selectMenu) {
    case "MES INFOS":
      content = <MesInfos />;
      break;
    case "PUBLIER":
      content = <Publier />;
      break;
    default:
      content = <Publier />;
  }

  return (
    <section>
      <div className="menu-container">
        {menus.map((menu) => (
          <div key={menu.id} className="menu-title">
            <ul>
              <li onClick={() => setSelectMenu(menu.value)}>{menu.value}</li>
            </ul>
          </div>
        ))}
      </div>
      {content}
    </section>
  );
};

export default MonEspace;
