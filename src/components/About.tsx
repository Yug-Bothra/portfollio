import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Cpu, Server, Smartphone, Zap, Brain, Cloud, GitBranch, Palette, Shield } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { 
      icon: Code, 
      name: 'React.js', 
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 95
    },
    { 
      icon: Database, 
      name: 'Python', 
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 90
    },
    { 
      icon: Server, 
      name: 'Firebase', 
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 85
    },
    { 
      icon: Globe, 
      name: 'JavaScript', 
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 92
    },
    { 
      icon: Brain, 
      name: 'Machine Learning', 
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 80
    },
    { 
      icon: Smartphone, 
      name: 'Mobile Dev', 
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 75
    },
    { 
      icon: Cloud, 
      name: 'Azure', 
      color: 'from-orange-600 to-yellow-500',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 78
    },
    { 
      icon: GitBranch, 
      name: 'Git & GitHub', 
      color: 'from-gray-700 to-gray-900',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 88
    },
    { 
      icon: Palette, 
      name: 'UI/UX Design', 
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 82
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  Passionate Developer & AI Enthusiast
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a dedicated developer with a deep passion for creating innovative web solutions 
                  and exploring the fascinating world of artificial intelligence. My journey in tech 
                  started with curiosity and has evolved into a mission to build applications that 
                  make a real difference.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me diving into the latest AI research, 
                  contributing to open-source projects, or exploring new technologies that push 
                  the boundaries of what's possible.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-200/20 dark:border-blue-700/20"
              >
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                  What Drives Me
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The intersection of creativity and technology fascinates me. I believe in writing 
                  clean, efficient code and creating user experiences that are both beautiful and functional.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50
                    }}
                    className="group relative overflow-hidden"
                  >
                    <div className={`bg-gradient-to-br ${skill.color} p-0.5 rounded-xl h-full`}>
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center h-full transition-all duration-300 group-hover:bg-opacity-95 relative overflow-hidden">
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 bg-cover bg-center"
                          style={{ backgroundImage: `url(${skill.image})` }}
                        />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <div className="relative mb-3">
                            <skill.icon 
                              size={32} 
                              className={`mx-auto bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                            />
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                              className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            />
                          </div>
                          
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 block mb-2">
                            {skill.name}
                          </span>
                          
                          {/* Skill Level Bar */}
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ delay: index * 0.1 + 0.8, duration: 1, ease: "easeOut" }}
                              className={`h-1.5 bg-gradient-to-r ${skill.color} rounded-full`}
                            />
                          </div>
                          
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Hover Effect Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Skills Tags */}
              <motion.div
                variants={itemVariants}
                className="mt-8"
              >
                <h4 className="text-lg font-semibold text-center mb-4 text-gray-800 dark:text-white">
                  Additional Technologies
                </h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {['TypeScript', 'Node.js', 'MongoDB', 'Docker', 'TensorFlow', 'Tailwind CSS', 'Next.js', 'GraphQL'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + 1.2, duration: 0.3 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300/20 dark:border-gray-600/20 hover:shadow-md transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;