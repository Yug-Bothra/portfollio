import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, Building } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  skills: string[];
}

const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      date: 'March 2024',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comprehensive course covering supervised learning, unsupervised learning, and neural networks.',
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Neural Networks'],
    },
    {
      id: 2,
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional certification demonstrating expertise in developing applications on AWS.',
      skills: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'CloudFormation'],
    },
    {
      id: 3,
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: 'November 2023',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced React concepts including hooks, context, and performance optimization.',
      skills: ['React', 'Redux', 'React Router', 'Testing'],
    },
    {
      id: 4,
      title: 'Google Data Analytics Certificate',
      issuer: 'Google',
      date: 'September 2023',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Data analysis fundamentals with hands-on experience in data visualization and statistics.',
      skills: ['Python', 'SQL', 'Tableau', 'R'],
    },
    {
      id: 5,
      title: 'Full Stack Web Development',
      issuer: 'The Odin Project',
      date: 'July 2023',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete full-stack development curriculum covering frontend and backend technologies.',
      skills: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
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
              Certificates & Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Continuous learning and professional development milestones
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block z-10"></div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`md:ml-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/20 dark:border-gray-700/20 ${
                      index % 2 === 0 ? 'md:mr-12' : 'md:ml-32 md:mr-8'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-32 object-cover rounded-xl"
                        />
                      </div>
                      
                      <div className="md:w-2/3 space-y-4">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {cert.title}
                          </h3>
                          <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                            <Award size={16} />
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-2">
                            <Building size={16} />
                            {cert.issuer}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {cert.date}
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {cert.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200/20 dark:border-blue-700/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;