import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yugbothra200@gmail.com',
      href: 'mailto:yugbothra200@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 79741 79029',
      href: 'tel:+917974179029',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Yug-Bothra',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yug-bothra/',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/yugbothra',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Let’s Connect
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12"
          >
            Feel free to reach out. Whether it's a project, question, or just to say hi — I’d love to hear from you!
          </motion.p>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white mb-3">
                  <info.icon size={24} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                <p className="font-semibold text-gray-800 dark:text-white">{info.value}</p>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Connect with me
            </h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
