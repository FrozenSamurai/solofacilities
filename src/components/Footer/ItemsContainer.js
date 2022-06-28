import React from "react";
import Items from "./Items";
import { SERVICES, CONTACT, TEAM, CLIENTS } from "./Menu";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Items links={SERVICES} title="SERVICES" />
      <Items links={CONTACT} title="CONTACT" />
      <Items links={TEAM} title="TEAM" />
      <Items links={CLIENTS} title="CLIENTS" />
    </div>
  );
};

export default ItemsContainer;
