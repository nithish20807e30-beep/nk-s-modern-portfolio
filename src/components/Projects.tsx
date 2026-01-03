import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Documentation Application',
    url: 'https://susindocuments.susinworld.in',
    tech: ['React.js', 'PHP', 'SQL'],
    description: 'Document management system for SUSIN GROUPS',
  },
  {
    title: 'SUSIN GROUPS Official Website',
    url: 'https://www.susingroup.com',
    tech: ['React.js', 'PHP', 'SQL'],
    description: 'Corporate website for SUSIN GROUPS',
  },
  {
    title: 'Actuator Sizing Calculation Tool',
    url: 'https://actuator.susinworld.in',
    tech: ['JavaScript', 'PHP'],
    description: 'Engineering calculation tool for actuator sizing',
  },
  {
    title: 'Workers CRM System',
    url: null,
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    description: 'Customer relationship management for workforce',
  },
  {
    title: 'SG National Storytelling Championship Official Website',
    url: 'https://sgnationalstorytellingchampionship.com/',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    description: 'Business website with dynamic features',
  },
  {
    title: 'RPS Website',
    url: 'https://rps.veniyas.com',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'Responsive professional website',
  },
  {
    title: 'Jaraa Website',
    url: 'https://jaraa.veniyas.com',
    tech: ['HTML', 'CSS'],
    description: 'Clean and modern website design',
  },
  {
    title: 'Voting Management System',
    url: null,
    tech: ['Python', 'Tkinter'],
    description: 'Desktop application for voting management',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-foreground mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, from corporate websites to internal tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)' 
              }}
              className="group bg-surface p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all duration-300"
            >
              {/* Project Icon */}
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <Code className="w-6 h-6" />
              </div>

              {/* Project Title */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-foreground transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-background text-xs font-medium text-muted-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.url ? (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              ) : (
                <span className="text-sm text-muted-foreground italic">Internal Project</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
