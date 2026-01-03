import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'SUSIN GROUPS',
    period: 'Present',
    type: 'work',
    description: [
      'Developing production-level web applications',
      'Frontend development with React.js',
      'Backend development using PHP and Node.js',
      'SQL database integration',
      'Internal tools & calculation systems',
    ],
  },
  {
    title: 'IT Intern',
    company: 'Veniyas Global IT Solutions',
    period: '2025',
    type: 'work',
    description: [
      'Responsive website development',
      'HTML, CSS, JavaScript, PHP development',
      'SQL database handling',
      'Debugging and optimization',
    ],
  },
];

const education = [
  {
    degree: 'B.Sc Information Technology',
    institution: 'Bharathiar University',
    percentage: '89.5%',
  },
  {
    degree: '12th State Board',
    institution: 'Government Boys Hr. Sec School',
    percentage: '82.6%',
  },
  {
    degree: '10th State Board',
    institution: 'Government Boys Hr. Sec School',
    percentage: '83.2%',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-foreground mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <Briefcase className="w-6 h-6 text-foreground" />
              <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  className="bg-background p-6 rounded-2xl border border-border transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="w-6 h-6 text-foreground" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  className="bg-background p-6 rounded-2xl border border-border transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-surface text-foreground text-sm font-bold rounded-lg">
                        {edu.percentage}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
