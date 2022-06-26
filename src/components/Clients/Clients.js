import React from "react";
import { forwardRef } from "react";
import Logo from "./Logo";

const Clients = forwardRef((_, ref) => {
  let clients = [
    "/assets/clients/honda.png",
    "/assets/clients/gst-dept.png",
    "/assets/clients/hp.png",
    "/assets/clients/big-bazaar.svg",
    "/assets/clients/lodhagroup.png",
    "/assets/clients/nike.png",
    "/assets/clients/misal.png",
    "/assets/clients/neste.png",
    "/assets/clients/regency.png",
    "/assets/clients/puma.png",
    "/assets/clients/samsung.png",
    "/assets/clients/d-mart.png",
    "/assets/clients/sbi.png",
  ];
  return (
    <section ref={ref} id="clients-container" className="pt-28">
      <div className="">
        <h1
          data-aos="fade-down"
          className="
        text-black text-center text-5xl
        lg:text-6xl uppercase glow font-titleBold
        "
        >
          Clients
        </h1>
        <div className="flex flex-wrap justify-center p-11 lg:pt-20 lg:pb-20">
          {clients.map((client, index) => (
            // console.log(client);
            <Logo key={client} clientt={client} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Clients;
