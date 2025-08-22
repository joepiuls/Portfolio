import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Terminal,
  Server,
  Smartphone,
  Palette,
  Zap,
  Cloud,
  GitBranch
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "TailwindCSS", level: 95 },
      { name: "Next.js", level: 85 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-teal-600",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 95 },
      { name: "Python", level: 80 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Prisma", level: 85 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Git", level: 95 },
      { name: "CLI Tools", level: 90 }
    ]
  }
];

const additionalSkills = [
  { name: "React Native", icon: Smartphone },
  { name: "GraphQL", icon: Globe },
  { name: "Docker", icon: Zap },
  { name: "AWS", icon: Cloud },
  { name: "Git", icon: GitBranch },
  { name: "Figma", icon: Palette },
  { name: "Terminal", icon: Terminal }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
    })
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks 
            that I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Main Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2">
                        <motion.div
                          variants={skillBarVariants}
                          initial="hidden"
                          whileInView="visible"
                          custom={skill.level}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        >
                          <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full transform translate-x-1"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {additionalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 flex items-center space-x-3 hover:bg-white/15 transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5 text-teal-400" />
                  <span className="text-white font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4">Always Learning</h4>
            <p className="text-slate-300 leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and best practices to deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}