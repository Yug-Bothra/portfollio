import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Calendar, Eye } from 'lucide-react';
import toast from 'react-hot-toast';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const downloadResume = () => {
    toast.success('Resume download started!');
    const link = document.createElement('a');
    link.href = 'yug bothra cv.pdf';
    link.download = 'yug bothra cv.pdf';
    link.click();
  };

  const viewResume = () => {
    window.open('yug bothra cv.pdf', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="resume" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Download my complete resume to learn more about my experience and qualifications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/20 dark:border-gray-700/20 mb-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <motion.div
                    whileHover={{ rotateY: 10 }}
                    className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl text-white text-center shadow-lg"
                  >
                    <FileText size={64} className="mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Professional Resume</h3>
                    <p className="text-blue-100">Complete CV with detailed experience</p>
                  </motion.div>
                </div>

                <div className="md:w-2/3 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      Yug Bothra - Developer Resume
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      A comprehensive overview of my technical skills, professional experience, 
                      education, and project achievements. Includes detailed information about 
                      my work in web development, AI/ML projects, and various certifications.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                        Experience
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        3+ years in development
                      </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                        Projects
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        15+ completed projects
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>Last Updated: March 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Buttons Section */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <div className="flex justify-center gap-6 flex-wrap">
                <motion.button
                  onClick={downloadResume}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg text-lg"
                >
                  <Download size={24} />
                  Download Resume
                </motion.button>

                <motion.button
                  onClick={viewResume}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg text-lg"
                >
                  <Eye size={24} />
                  View Resume
                </motion.button>
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-sm">
                PDF format • 245 KB • Professional layout
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              ✨ Updated 2024
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
