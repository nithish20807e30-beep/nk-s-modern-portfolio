import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import profileImg from "../assets/nithish.png";


const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-widest"
            >
              Hi There,
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            >
              I am{" "}
              <span className="relative inline-block">
                Nithish Kumar S
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gray-800"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 font-medium mb-8"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Full Stack Developer currently working at SUSIN GROUPS, experienced
              in building real-world production web applications. Strong in
              frontend development using React.js and backend development using
              PHP and Node.js.
            </motion.p>

            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 mb-6"
            >
              <a
                href="mailto:snithish759@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">snithish759@gmail.com</span>
              </a>

              <a
                href="tel:8838617097"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">8838617097</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 text-gray-600 mb-8"
            >
              <MapPin className="w-5 h-5" />
              <span className="text-sm">
                Uthangarai, Krishnagiri District, Tamil Nadu, India
              </span>
            </motion.div>

            {/* CTA BUTTON */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gray-800 text-white font-semibold rounded-full shadow-lg transition"
            >
              Hire Me
            </motion.a>
          </div>

          {/* RIGHT CONTENT - PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">

              {/* Decorative Rings */}
              <motion.div
                className="absolute -inset-4 border-2 border-gray-300 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              <motion.div
                className="absolute -inset-8 border border-gray-200 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />

              {/* IMAGE */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gray-100">
                <motion.img
                  src={profileImg}
                  alt="Nithish Kumar S"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </div>

              {/* FLOATING BADGE */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white border-2 border-gray-800 px-4 py-2 rounded-lg shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                <p className="text-xs text-gray-500">Currently at</p>
                <p className="text-sm font-semibold text-gray-800">
                  SUSIN GROUPS
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
