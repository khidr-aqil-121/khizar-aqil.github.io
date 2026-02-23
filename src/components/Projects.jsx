import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-10% 0px',
      },
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Commercial Aviation Safety Analytics',
      description:
        'Interactive Power BI dashboard analyzing 30+ years of Canadian TSB ASIS data for domestic commercial passenger aircraft, identifying operational risk drivers, weather-related hazards, and accident severity trends aligned with ICAO standards.',
      image: '/airport-aerial.jpg',
      tags: ['PowerBI', 'Excel', 'Data Visualization'],
      impact: '25% increase in sales efficiency',
    },
    {
      title: 'Customer Churn Prediction Model',
      description: 'Developed a machine learning model to predict customer churn with 87% accuracy, enabling proactive retention strategies.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzY3MTMzNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Machine Learning', 'Scikit-learn'],
      impact: '15% reduction in churn rate',
    },
    {
      title: 'Market Segmentation Analysis',
      description: 'Comprehensive customer segmentation using clustering algorithms to identify 5 distinct customer personas for targeted marketing.',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NzEzNTgzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['R', 'K-Means', 'Statistical Analysis'],
      impact: '30% improvement in campaign ROI',
    },
  ];

  return (
    <section id="projects" className="section-shell bg-[#F8F0E3] text-gray-900">
      <div className="section-inner w-full max-w-7xl flex flex-col items-center gap-8 mx-auto">
        <div className="section-head text-center w-full">
          <h2
            className="heading-luxe text-5xl sm:text-6xl mb-4"
            style={{
              color: 'rgba(74, 85, 101, 1)',
              fontWeight: 900,
              fontFamily: '"Times New Roman", serif',
              letterSpacing: '1px',
            }}
          >
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontWeight: 600, color: 'rgba(74, 85, 101, 1)' }}>
            A selection of recent data analysis projects demonstrating my skills and impact
          </p>
        </div>

        <div className="section-body projects-section-body flex flex-nowrap gap-8 justify-center items-center w-full">
          {projects.map((project, index) => (
            <article
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="article-wrapper card-reveal"
            >
              <div
                className="rounded-lg container-project"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="project-info">
                <div className="flex-pr">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                  </div>
                  <div className="project-hover">
                    <ExternalLink size={20} />
                  </div>
                </div>
                <div className="types">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-type">
                      • {tag}
                    </span>
                  ))}
                </div>
                {project.impact && (
                  <div className="impact-pill">{project.impact}</div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
