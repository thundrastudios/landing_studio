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
    <div className='text-center py-20'>
      <h2
        className='md:text-5xl text-3xl'
        data-aos='fade-down'
        aos-duration={300}
      >
        Наши проекты:
      </h2>
      <ul
        className='flex justify-center md:py-25 md:text-3xl px-3 py-10 '
        data-aos='fade-left'
        aos-duration={500}
      >
        {pet_projects.map((proj) => (
          <li
            key={proj.ProjectName}
            className='border-3 border-gray-600 rounded-4xl py-10 hover:scale-110 hover:bg-slate-900/40 transition-all duration-350 '
          >
            <div className='md:py-5 md:px-5 px-1'>
              <h3 className='md:text-4xl text-xl pb-10'>{proj.ProjectName}</h3>
              <Image
                src={proj.ProjectImg}
                alt={proj.ProjectName}
                width={700}
                height={500}
              />
              <ul className='md:text-2xl text-sm pt-3 my-8'>
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
