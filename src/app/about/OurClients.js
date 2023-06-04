import Image from "next/image";
import image1 from "../assets/clients/client-logo1.png";
import image2 from "../assets/clients/client-logo2.png";
import image3 from "../assets/clients/client-logo3.png";
import image4 from "../assets/clients/client-logo4.png";

const OurClients = () => {
  const clientsImages = [image1, image2, image3, image4];
  return (
    <main className="w-full">
      <section className="container px-2 md:px-10 lg:px-20 mx-auto py-10">
        <hr />
        <br />
        <br />
        <h1 className="text-xl md:text-2xl font-normal mb-6 text-gray-600">
          Our Clients
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clientsImages?.map((image, i) => (
            <Image
              src={image}
              alt="latest-post-image"
              width={200}
              height={240}
              key={i}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default OurClients;
