import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'khidr.aqil@mail.utoronto.ca',
      href: 'mailto:khidr.aqil@mail.utoronto.ca',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'in/khizar-aqil',
      href: 'https://www.linkedin.com/in/khizar-aqil',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@dataanalyst',
      href: 'https://github.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mississauga, ON',
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-shell bg-[#F8F0E3] text-gray-900">
      <div className="section-inner w-full max-w-7xl flex flex-col items-center gap-8 mx-auto">
        <div className="section-head text-center w-full">
          <h2
            className="heading-luxe text-5xl sm:text-6xl mb-4"
            style={{
              fontWeight: 900,
              fontFamily: '"Times New Roman", serif',
              letterSpacing: '1px',
              color: 'rgba(74, 85, 101, 1)',
            }}
          >
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontWeight: 600, color: 'rgba(74, 85, 101, 1)' }}>
            Have a project in mind or want to discuss data analytics? I'd love to hear from you!
          </p>
        </div>

        <div className="section-body flex flex-col gap-12 items-center max-w-6xl mx-auto w-full">
          {/* Contact Form + Info */}
          <div className="w-full max-w-3xl flex flex-col md:flex-row gap-10 justify-center items-start md:items-center">

            {/* Contact Information */}
            <div className="bg-white p-8 card-rounded shadow-[inset_0px_4px_12px_0px_rgba(0,0,0,0.15)] transition-transform duration-200 ease-in-out hover:-translate-y-[6px] hover:shadow-[0_28px_60px_rgba(15,23,42,0.22)] w-fit max-w-lg overflow-hidden">
              <h3 className="text-[#111827] text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4">
                      <div className="bg-[#FFE6D5] text-blue-600 p-3 rounded-xl">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="text-[#4B5563]">{info.label}</div>
                        <div className="text-[#111827] font-medium">{info.value}</div>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block hover:bg-[#f9fafb] p-2 rounded-xl transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} className="p-2">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
