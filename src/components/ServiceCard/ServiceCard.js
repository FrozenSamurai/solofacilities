import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ imagePath, text, service }) => {
  return (
    <div
      //   data-aos="flip-left"
      className="Container"
      style={{
        width: 300,
      }}
    >
      <div className="card mx-auto">
        <div
          className="Back rounded-lg shadow-2xl px-3 py-4 text-gray-50 text-center"
          style={{ backgroundColor: "rgb(22, 163, 74)" }}
        >
          <img
            src={imagePath}
            className="w-5/6 h-2/3 ml-auto mr-auto"
            // style={{ maxWidth: 250 }}
            alt="service icon"
          />
          <p className="text-gray-200 pt-4 text-2xl font-semibold">{service}</p>
        </div>
        <div
          className="Front flex flex-col items-center justify-between w-full pb-2 text-center rounded-lg shadow-2xl px-2 pt-2 text-gray-50"
          style={{ backgroundColor: "rgb(29, 56, 107)" }}
        >
          {text !== "" ? (
            <>
              <div>
                {text.split("-").map((txt) => (
                  <p className="text-left pb-2 w-full">{"-" + txt}</p>
                ))}
              </div>
              <a
                className="w-fit h-10 bg-green-500 rounded-sm p-2"
                href="tel:+91-9082296202"
              >
                Call Us
              </a>
            </>
          ) : (
            <div className="h-full w-full flex justify-center items-center flex-col space-y-2">
              <h1 className="font-bold ">Contact Us For Quotation</h1>
              <a
                className="w-2/3 bg-blue-500 rounded-sm p-2"
                href="tel:+91-9082296202"
                target={"_blank"}
                rel="noopener noreferrer"
                title="Call"
              >
                Call Us
              </a>
              <a
                className="w-2/3 bg-green-500 rounded-sm p-2"
                href={`https://wa.me/919082296202?text=Hello%2C%20I%20found%20you%20on%20SOLO%20FACILITIES%20WEBSITE%2CWant%20to%20know%20about%20${service}`}
                target={"_blank"}
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                Whatsapp Us
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
