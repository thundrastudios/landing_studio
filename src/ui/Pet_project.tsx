import { StaticImageData } from "next/image";
import Image from "next/image";

interface Iprojects {
  ProjectName: string;
  ProjectImg: string | StaticImageData;
  ProjectPreum: string[];
}

function Pet_project() {
  const pet_projects: Iprojects[] = [
    {
      ProjectName: "Лендинг для команды спортсменов",
      ProjectPreum: ["Увеличили доход в 2 раза", "Более 200+ новых заявок"],
      ProjectImg: "/img_projects/all-devices-black.png",
    },
  ];
  return (
    <div className='text-center'>
      <h2 className='text-5xl' data-aos='fade-down' aos-duration={300}>
        Наши проекты:
      </h2>
      <ul
        className='flex justify-center py-25 text-3xl'
        data-aos='fade-left'
        aos-duration={500}
      >
        {pet_projects.map((proj) => (
          <li
            key={proj.ProjectName}
            className='border-3 border-gray-600 rounded-4xl py-10 hover:scale-110 hover:bg-slate-900/40 transition-all duration-350 '
          >
            <div className='py-5 px-5'>
              <h3 className='text-4xl pb-10'>{proj.ProjectName}</h3>
              <Image
                src={proj.ProjectImg}
                alt={proj.ProjectName}
                width={700}
                height={500}
              />
              <ul className='text-2xl pt-3 my-8'>
                {proj.ProjectPreum.map((preum) => (
                  <li key={preum.valueOf()} className='py-3 '>
                    {preum}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href='#form-itcontacts'
              className='bg-purple-800/45 p-5 rounded-3xl  hover:bg-purple-600/75 transition-all duration-350 '
            >
              ХОЧУ ТАКЖЕ!
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pet_project;
