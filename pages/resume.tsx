import Bar from "../components/Bar";
import { languages, tools } from "../data";
import {motion} from 'framer-motion';
import {fadeInUp,routeAnimation} from '../animation';
import Head from "next/head";

const Resume = () => {
return (
  <motion.div className="px-6 py-2"
  variants={routeAnimation}
  initial="initial"
  animate="animate"
  >
    <Head>
      <title>Ibrahima Traore | Developer FullStack</title>
    </Head>
    {/* //! Education & Experience */}
    <div className="grid gap-6 md:grid-cols-2">
    <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h5 className="my-3 text-2xl font-bold">Formation</h5>
        <div className="">
          <h5 className="my-2 text-xl font-bold">
            Computer Science Engineering
          </h5>
          <p className="font-semibold">Academy of Technology (2017-2021)</p>
          <p className="my-3">
            I am currently pursuing B.tech in Computer Science Engineering
            from Academy of Technology
          </p>
        </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <h5 className="my-3 text-2xl font-bold">Experiences professionnelles</h5>
        <div className="">
          <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
          <p className="font-semibold">Tata Consultancy Services</p>
          <p className="my-3">I don know why I am doing this job</p>
        </div>
        </motion.div>
    </div>

    {/*Languages & Tools */}
    <div className="grid gap-9 md:grid-cols-2">
      <div>
        <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
        <div className="my-2">
          {languages.map((language, i) => (
            <Bar value={language} key={i} />
          ))}
        </div>
      </div>

      <div>
        <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
        <div className="my-2">
          {tools.map((tool, i) => (
            <Bar value={tool} key={i} />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);
};

export default Resume;