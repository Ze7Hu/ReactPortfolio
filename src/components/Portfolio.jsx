import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { SectionWrapper } from "../utils/hoc";
import mypic from "../assets/mypic.jpeg";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';


const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={ experience.date }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <div 
          // src={experience.icon}
          alt={experience.title}
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>
      {/* <p className="text-secondary text-[16px] font-semibold"
      style={{ margin: 0 }}>
        {experience.company_name}
      </p> */}
    </div>

    <ul className="mt-5 mb-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
    <img 
            src={experience.image}
            alt="profilepic"
            className="h-80 w-full mb-3 rounded content-cover border border-indigo-700"
          />
    <a className="text-blue-500 text-lg mr-6 " href={experience.link}>View code</a>
    <a className="text-blue-500 text-lg mt-6 " href={experience.live}>View live</a>
  </VerticalTimelineElement>
)

const Portfolio = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>What I have done</p> */}
        <h2 className={styles.sectionHeadText}>Portfolio</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Portfolio, "portfolio")