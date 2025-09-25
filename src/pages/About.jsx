import React, { useRef, useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// Simple microinteraction hook for hover scale effects on buttons and links
function useMicroInteractions() {
  useEffect(() => {
    const elements = document.querySelectorAll('button, a');
    elements.forEach(el => {
      gsap.set(el, { transformOrigin: 'center center' });
      const onMouseEnter = () => gsap.to(el, { scale: 1.05, duration: 0.3, ease: 'power1.out' });
      const onMouseLeave = () => gsap.to(el, { scale: 1, duration: 0.3, ease: 'power1.out' });
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
      // Cleanup on unmount
      return () => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      };
    });
  }, []);
}

const About = () => {
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const contactFormRef = useRef(null);

  useMicroInteractions();

  useGSAP(() => {
    if (!aboutRef.current) return;

    gsap.fromTo(
      aboutRef.current.querySelector('.about-hero'),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      teamRef.current.querySelectorAll('.team-card'),
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      valuesRef.current.querySelectorAll('.value-card'),
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      timelineRef.current.querySelectorAll('.timeline-item'),
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      contactFormRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactFormRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const teamMembers = [
    {
      name: "John Dubey",
      position: "CEO & Founder",
      bio: "Leading Zurix with a vision to democratize AI technology. 10+ years experience in AI strategy and business transformation.",
      image: "/images/automation.jpg",
      email: "john@zurix.ai",
      linkedin: "#",
      expertise: ["AI Strategy", "Business Development", "Leadership"],
    },
    {
      name: "Sarah Chen",
      position: "Head of AI Research",
      bio: "PhD in Machine Learning from MIT. Specializes in developing cutting-edge AI models and algorithms for enterprise solutions.",
      image: "/images/automation.jpg",
      email: "sarah@zurix.ai",
      linkedin: "#",
      expertise: ["Machine Learning", "Deep Learning", "Research"],
    },
    {
      name: "Michael Rodriguez",
      position: "CTO & Solutions Architect",
      bio: "Full-stack engineer with expertise in scalable AI infrastructure. Former senior engineer at Google and Microsoft.",
      image: "/images/automation.jpg",
      email: "michael@zurix.ai",
      linkedin: "#",
      expertise: ["Cloud Architecture", "DevOps", "System Design"],
    },
    {
      name: "Emily Watson",
      position: "Head of Client Success",
      bio: "Ensuring our clients achieve maximum ROI from AI implementations. Expert in change management and digital transformation.",
      image: "/images/automation.jpg",
      email: "emily@zurix.ai",
      linkedin: "#",
      expertise: ["Client Relations", "Project Management", "Training"],
    },
  ];

  const timeline = [
    { year: "2020", title: "Company Founded", description: "Started building the foundation for a new AI-driven future." },
    { year: "2021", title: "R&D Begins", description: "Focused on developing our core AI competencies and solutions." },
    { year: "2022", title: "First Prototype", description: "Created proof of concept for automation platforms." },
    { year: "2023", title: "Team Formation", description: "Assembled a team of passionate AI experts and developers." },
    { year: "2024", title: "Pilot Projects", description: "Started collaborating with early adopters on pilot AI projects." },
    { year: "2025", title: "Launch Preparation", description: "Preparing to officially launch services and expand globally." },
  ];

  const stats = [
    { number: "0", label: "Live Projects" },
    { number: "0", label: "Clients So Far" },
    { number: "0", label: "Countries Reached" },
    { number: "100%", label: "Commitment to Success" },
  ];

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! We'll get in touch soon.");
    setContactForm({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative">
      {/* Background visuals here if any */}

      {/* Hero Section */}
      <section ref={aboutRef} className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="about-hero text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Zurix
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-700">
            Launching soon with a vision to revolutionize business automation and AI-driven innovation.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white rounded-lg shadow-lg max-w-7xl mx-auto px-6 space-y-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Zurix is an emerging technology consultancy focused on empowering businesses with intelligent automation and AI.
              We're building state-of-the-art solutions that will unlock new efficiency and growth paths for our future clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              While we’re still in our initial stages, our team is full of passionate experts dedicated to creating value through innovation,
              ethics, and strategic insight.
            </p>
          </div>
          <div>
            <img src="/images/automation.jpg" alt="Our Team" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white shadow-lg">
              <div className="text-3xl font-extrabold">{stat.number}</div>
              <div className="mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-20 max-w-7xl mx-auto px-6 space-y-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: 'Innovation', icon: '💡', desc: 'Striving to push boundaries with creative AI technologies.' },
            { title: 'Integrity', icon: '⚖️', desc: 'Ethical & transparent practices in all our engagements.' },
            { title: 'Collaboration', icon: '🤝', desc: 'Partnering with clients for tailored impactful solutions.' },
          ].map(({title, icon, desc}, i) => (
            <div key={i} className="p-8 shadow-lg rounded-lg border border-gray-200 text-center">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Journey Ahead</h2>
        <ul className="relative border-l-4 border-purple-600">
          {timeline.map((item, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full -left-4 ring-8 ring-white text-white font-bold">{item.year}</span>
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map(({name, position, bio, image, email, linkedin, expertise}, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={image} alt={name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{name}</h3>
                <p className="text-indigo-600 mb-2">{position}</p>
                <p className="text-gray-700 mb-4 text-sm">{bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {expertise.map((skill, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-800 text-xs rounded-full px-2 py-1">{skill}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-indigo-600">
                  <a href={`mailto:${email}`} title="Send Email"><FaEnvelope className="hover:text-indigo-900" /></a>
                  <a href={linkedin} title="LinkedIn Profile"><FaLinkedinIn className="hover:text-indigo-900" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactFormRef} className="py-20 max-w-4xl mx-auto px-6 bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-700 rounded-lg shadow-lg text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" placeholder="Your Name" 
            required 
            className="w-full p-4 rounded-md bg-indigo-500 bg-opacity-30 border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={contactForm.name}
            onChange={e => setContactForm({...contactForm, name: e.target.value})}
          />
          <input type="email" placeholder="Your Email" 
            required 
            className="w-full p-4 rounded-md bg-indigo-500 bg-opacity-30 border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={contactForm.email}
            onChange={e => setContactForm({...contactForm, email: e.target.value})}
          />
          <input type="text" placeholder="Company (optional)" 
            className="w-full p-4 rounded-md bg-indigo-500 bg-opacity-30 border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={contactForm.company}
            onChange={e => setContactForm({...contactForm, company: e.target.value})}
          />
          <textarea placeholder="Tell us about your project" rows={5} 
            required 
            className="w-full p-4 rounded-md bg-indigo-500 bg-opacity-30 border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={contactForm.message}
            onChange={e => setContactForm({...contactForm, message: e.target.value})}
          />
          <button type="submit" className="w-full py-4 bg-white text-indigo-700 font-bold rounded-md hover:bg-indigo-50 transition">
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
};

export default About;
