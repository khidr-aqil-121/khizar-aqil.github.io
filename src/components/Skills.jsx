import { Database, BarChart3, Code2, Brain } from 'lucide-react';
import { MagicBentoCard } from './MagicBento';

export function Skills() {
  const skillCategories = [
    {
      icon: Database,
      title: 'Data Management',
      skills: ['SQL', 'MySQL', 'SQLite', 'Data Cleaning & Validation', 'Structured Data Preparation'],
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      skills: [
        'Power BI',
        'Excel (Charts & Pivot Tables)',
        'Python (matplotlib)',
        'Dashboard Design',
        'Data Storytelling',
      ],
    },
    {
      icon: Code2,
      title: 'Programming',
      skills: ['Python', 'R', 'JavaScript', 'Git / GitHub', 'Object-Oriented Programming'],
    },
    {
      icon: Brain,
      title: 'Analytics',
      skills: [
        'Statistical Analysis',
        'Probability & Inference',
        'Exploratory Data Analysis (EDA)',
        'Data Interpretation',
        'Applied Statistics',
      ],
    },
  ];

  return (
    <section id="skills" className="section-shell grid items-center bg-[#F8F0E3]">
      <div className="section-inner w-full max-w-7xl flex flex-col items-center gap-8 mx-auto">
        <div className="section-head text-center w-full">
          <h2
            className="heading-luxe text-5xl sm:text-6xl mb-4"
            style={{
              fontSize: '60px',
              fontFamily: '"Times New Roman", serif',
              fontWeight: 900,
              letterSpacing: '1px',
              color: 'rgba(74, 85, 101, 1)',
            }}
          >
            Skills & Expertise
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontWeight: 600, color: 'rgba(74, 85, 101, 1)' }}
          >
            A comprehensive toolkit for turning raw data into meaningful insights
          </p>
        </div>

        <div className="section-body flex flex-nowrap gap-8 w-full justify-center items-center">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <MagicBentoCard
                key={index}
                className="bg-white p-8 card-rounded text-left align-middle w-[279px] h-[280px] min-w-[279px] shrink-0 grid shadow-[inset_0px_4px_12px_0px_rgba(0,0,0,0.15)] transition-transform duration-200 ease-in-out hover:-translate-y-[6px] hover:shadow-[0_28px_60px_rgba(15,23,42,0.22)] overflow-hidden"
                style={{ width: 279, height: 280, minWidth: 279 }}
                enableTilt={false}
                enableMagnetism={false}
                clickEffect
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#FFE6D5] text-blue-600 p-3 rounded-xl">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-[#111827] font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3 leading-relaxed">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-[#4B5563] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </MagicBentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
