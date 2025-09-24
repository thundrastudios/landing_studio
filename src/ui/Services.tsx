import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface IService {
  serviceName: string;
  serviceCount: number;
  serviceImg: string | StaticImport;
  serviceDescription: string;
}
export function Services() {
  const servic = ([
    { serviceName, serviceCount, serviceImg, serviceDescription },
  ]: IService[]) => {
    return (
      <div>
        <h2>{serviceName}</h2>
        <Image src={serviceImg} alt={serviceName} />
        <p>{serviceDescription}</p>
        <h2>{serviceCount}</h2>
      </div>
    );
  };

  const Services: IService[] = [
    {
      serviceName: "vip",
      serviceCount: 20000,
      serviceImg: "",
      serviceDescription: "Vip premium ",
    },
    {
      serviceName: "vip1",
      serviceCount: 200000,
      serviceImg: "",
      serviceDescription: "Vip1 premium ",
    },
  ];

  return (
    <div>
      <h1>Наши услуги</h1>
      <ul>
        {Services.map((serv) => (
          <li key={serv.serviceName}>
            <div>
              <h2>{serv.serviceName}</h2>
              <Image src={serv.serviceImg} alt={serv.serviceName} />
              <p>{serv.serviceDescription}</p>
              <h2>{serv.serviceCount}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
