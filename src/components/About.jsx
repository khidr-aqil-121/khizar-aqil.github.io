import { MagicBentoCard } from './MagicBento';
import { Award, Target, Users } from 'lucide-react';

export function About() {
  const aboutText =
    'I focus on data analytics and visualization—cleaning messy real-world datasets, validating them, analyzing trends, and telling clear, meaningful stories with tools like Python, Excel, Power BI, and SQL.';

  const highlights = [
    {
      icon: Target,
      title: 'Data Cleaning & Validation',
      description: 'Cleaning, structuring, and validating real-world datasets to ensure accuracy and analytical reliability.',
    },
    {
      icon: Award,
      title: 'Data Analysis & Visualization',
      description: 'Analyzing data using Python, Excel, and Power BI to identify trends and communicate insights clearly.',
    },
    {
      icon: Users,
      title: 'Statistical Reasoning',
      description: 'Applying statistical methods and analytical thinking to support data-driven decision making.',
    },
  ];

  const aboutCards = highlights.map((highlight) => ({
    icon: highlight.icon,
    title: highlight.title,
    description: highlight.description,
  }));

  return (
    <section id="about" className="section-shell min-h-0 items-center bg-[#F8F0E3] text-gray-900">
      <div className="section-inner w-full max-w-7xl flex flex-col items-center gap-8 mx-auto">
        <div className="section-head text-center w-full">
          <h2
            className="heading-luxe text-5xl sm:text-6xl mb-4"
            style={{
              fontFamily: '"Times New Roman", serif',
              fontWeight: 900,
              letterSpacing: '1px',
              color: 'rgba(74, 85, 101, 1)',
            }}
          >
            About Me
          </h2>
          <p
            className="text-gray-700 max-w-2xl mx-auto mt-4"
            style={{ fontWeight: 600, color: 'rgba(74, 85, 101, 1)' }}
          >
            {aboutText}
          </p>
        </div>

        <div className="section-body flex flex-nowrap gap-8 w-full justify-center items-center">
          {aboutCards.map((card, index) => (
            <MagicBentoCard
              key={index}
              className="about-card-mobile bg-white p-6 sm:p-8 card-rounded about-card-shadow transition-transform duration-200 ease-in-out hover:-translate-y-[6px] w-full max-w-[336px] min-w-0 sm:min-w-[280px] sm:w-[336px] sm:h-[236px] shrink-0 overflow-hidden text-left align-middle"
              style={{ minHeight: 236 }}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={false}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#FFE6D5] text-blue-600 p-3 rounded-xl">
                  <card.icon size={24} />
                </div>
                  <h3
                    className="text-[#111827] font-semibold"
                    style={{
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '20px',
                    }}
                  >
                    {card.title}
                  </h3>
              </div>
              <p
                className="text-[#4B5563] leading-relaxed text-center"
                style={{ fontWeight: 500 }}
              >
                {card.description}
              </p>
              </MagicBentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}

