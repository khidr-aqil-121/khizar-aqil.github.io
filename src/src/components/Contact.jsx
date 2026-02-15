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
      value: '/in/dataanalyst',
      href: 'https://linkedin.com',
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
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss data analytics? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="text-gray-500">{info.label}</div>
                        <div className="text-gray-900">{info.value}</div>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a
                      key={index}
                      href={info.href}
                      className="block hover:bg-gray-50 p-2 rounded-lg transition-colors"
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

            <div className="mt-6 bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h4 className="text-gray-900 mb-2">Open to Opportunities</h4>
              <p className="text-gray-600">
                I'm currently available for freelance projects and full-time positions. 
                Let's collaborate to turn your data into actionable insights!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
