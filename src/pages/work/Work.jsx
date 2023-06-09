import { useParams } from "react-router-dom";
import { portfolioData } from "../../data";
import { Background2} from "../../assets";

function Work() {
  const { id } = useParams();
  const project = portfolioData.find(item => item.id === id);
  console.log(project)
  return (
    <>
   
      <section
        className="text-white py-28 bg-center bg-cover"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(" + Background2 + ")" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold uppercase">Project</h2>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-6">
            {project.title}
          </h1>

          <div className="text-lg md:flex gap-12">
            <div className="mb-4 md:mb-0">
              <span className="font-bold block mb-4">Role</span>
              {project.category.map((c,index)=>(
                <p key={index}>{c}</p>
              ))}
            </div>

            <div>
              <span className="font-bold block mb-4">Live Link</span>
              <a
                target="_blank"
                href={`https://${project.url}`}
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.url}
              </a>
            </div>
            <div>
              <span className="font-bold block mb-4">Source Code</span>
              <a
                target="_blank"
                href={`https://${project.code}`}
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.code}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-black border-t-2 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Involvement</h1>
          <p className="text-lg max-w-xl mb-16">
            {project.involvement}
          </p>

          <img
            src={project.screenshot}
            alt="Harley Davidson website"
            width="1053"
            height="539"
            loading="lazy"
            className="mx-auto mb-16"
          />

          {/* <h1 className="text-3xl font-bold mb-4">Results</h1>
          <p className="text-lg max-w-xl mb-16">
            In 2019 Harley Davidson, the legendary American motorcycles brand
            had a major brand change. My involvement with the Harley Davidson
            rebranding was to create and maintain their online presence along
            with being directly involved with the process of rebranding.
          </p>

          <ul className="text-lg flex gap-8">
            <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-4">
              <span className="font-bold text-2xl">10%</span>
              <span>Increase in Sales</span>
            </li>
            <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-4">
              <span className="font-bold text-2xl">20%</span>
              <span>Increase in website engagement</span>
            </li>
          </ul> */}
        </div>
      </section>
     
   
   
  </>
  );
}

export default Work;
