import SkillCard from "../components/SkillCard";

const skillItem = [
  {
    imgSrc: './sobre/php.png',
    label: 'PHP',
    desc: 'Web server'
  },
  {
    imgSrc: './sobre/css.png',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/sobre/javascript.png',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/sobre/nodejs.png',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: './sobre/python.png',
    label: 'Python',
    desc: 'Data analysis'
  },
  {
    imgSrc: './sobre/mysql.png',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: './sobre/react.png',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: './sobre/tailwind.png',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

export default function Sobre() {
  return (
    <>
      <section className="section flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-10 mx-auto my-5 max-w-5xl px-4">
      <div className="text-white py-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Um pouco sobre mim</h1>
        <p className="text-base md:text-lg mb-2">
          Desde pequeno tive muita admiração por criação e desenvolvimento.
        </p>
        <p className="text-base md:text-lg mb-2">
          Atualmente trabalho na FIAP como dev PHP e estou desenvolvendo minhas habilidades em NodeJS e PHP!
        </p>
        <p className="text-base md:text-lg mb-2">
          Tenho experiência acadêmica no exterior, onde fiz meu ensino médio na California e 2 meses estudando no Canadá na Hansa Language Center.
        </p>
      </div>
      <div className="w-full md:w-auto">
        <img className="w-96 h-96 md:w-35 md:h-48 lg:w-45 lg:h-45 rounded-full mx-auto md:mx-0" src="./programming.png" alt="Programming" />
      </div>
    </div>

        
        <div className="container text-center flex flex-col mt-10"> 
          <h2 className="headline-2 reveal-up text-orange-600 text-5xl font-bold"> 
            Ferramentas que utilizo
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] mx-auto reveal-up"> 
            Descubra algumas ferramentas que eu utilizo
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center"> {/* Ajuste para centralizar */}
            {
              skillItem.map(({ imgSrc, label, desc }, key) => (
                <SkillCard
                  key={key}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="reveal-up"
                />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}
