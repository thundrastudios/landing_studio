import Image from "next/image";

interface IService {
  serviceName: string;
  serviceCount: number;
  serviceImg: string;
  serviceDescription: string;
}
export function Services() {
  const servic = ([
    { serviceName, serviceCount, serviceImg, serviceDescription },
  ]: IService[]) => {
    return (
      <li key={serviceName}>
        <div>
          <h2>{serviceName}</h2>
          <Image src={serviceImg} alt={serviceName} />
          <p>{serviceDescription}</p>
          <h2>{serviceCount}</h2>
        </div>
      </li>
    );
  };

  const Services: IService[] = [
    {
      serviceName: "vip",
      serviceCount: 20000,
      serviceImg: "vip",
      serviceDescription: "Vip premium ",
    },
    {
      serviceName: "vip1",
      serviceCount: 200000,
      serviceImg: "vip1",
      serviceDescription: "Vip1 premium ",
    },
  ];

  return (
    <div>
      <h1>Наши услуги</h1>
      <ul>
        {Services.map((serv) => (
          <> {serv.serviceName}</>
        ))}
      </ul>
    </div>
  );
}
