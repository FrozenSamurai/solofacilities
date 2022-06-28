import { forwardRef } from "react";
import Logo from "./Logo";

// import "./Clients.css";

const Clients = forwardRef((_, ref) => {
  const clients = [
    "/assets/clients/honda.png",
    "/assets/clients/hp.png",
    "/assets/clients/big-bazaar.svg",
    "/assets/clients/gst-dept.png",
    "/assets/clients/lodhagroup.png",
    "/assets/clients/nike.png",
    "/assets/clients/misal.png",
    "/assets/clients/neste.png",
    "/assets/clients/regency.png",
    "/assets/clients/puma.png",
    "/assets/clients/samsung.png",
    "/assets/clients/d-mart.png",
    "/assets/clients/sbi.png",
    "/assets/clients/homefirst.svg",
  ];
  // const clientsDiv = useRef();
  //scroll client div smoothly
  // useEffect(() => {
  //   // const clientWidth = clientsDiv.current.clientWidth;
  //   let firstElementHeight = clientsDiv.current.children[0].clientWidth;
  //   firstElementHeight = clientsDiv.current.children[0].clientWidth;
  //   console.log(
  //     { firstElementHeight },
  //     clientsDiv.current,
  //     clientsDiv.current.children[0].clientWidth
  //   );
  //   clientsDiv.current.animate(
  //     { left: -firstElementHeight },
  //     { duration: 600 }
  //   );
  //   clientsDiv.current.onanimationend = () => {
  //     const newClients = [...clients];
  //     const firstEl = newClients.shift();
  //     newClients.push(firstEl);
  //     setClients(newClients);
  //   };
  // }, []);

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
        <div
          id="clients"
          className={
            window.innerWidth < 480
              ? "overflow-x-scroll scroll-smooth  flex-row whitespace-nowrap m-4 py-4 lg:pt-20 lg:pb-20"
              : "flex flex-wrap justify-center m-4 py-4 lg:pt-20 lg:pb-20"
          }
          // style={{ scrollbar-width:" thin"}}
        >
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
