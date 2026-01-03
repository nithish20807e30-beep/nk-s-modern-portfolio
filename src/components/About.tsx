import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Server, Database, Globe } from 'lucide-react';

const highlights = [
  { icon: Code, label: 'Frontend', description: 'React.js, HTML, CSS, JavaScript' },
  { icon: Server, label: 'Backend', description: 'PHP, Node.js' },
  { icon: Database, label: 'Database', description: 'SQL, MongoDB' },
  { icon: Globe, label: 'Web Apps', description: 'Production-ready applications' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-foreground mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Image/Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">NK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Nithish Kumar S</h3>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-surface p-4 rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <item.icon className="w-6 h-6 text-foreground mb-2" />
                    <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Hello, I Am <span className="text-muted-foreground">Full Stack Developer</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Full Stack Developer currently working at SUSIN GROUPS, experienced in building real-world 
              production web applications. Strong in frontend development using React.js and backend 
              development using PHP and Node.js.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Skilled in SQL and MongoDB databases with a basic foundation in Python. Passionate about 
              solving business and engineering problems through scalable, efficient digital solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-muted-foreground text-sm">Name</p>
                <p className="font-semibold text-foreground">Nithish Kumar S</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="font-semibold text-foreground">snithish759@gmail.com</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Phone</p>
                <p className="font-semibold text-foreground">8838617097</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="font-semibold text-foreground">Tamil Nadu, India</p>
              </div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 border-2 border-foreground text-foreground font-semibold rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
