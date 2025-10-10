


import axios from "axios";
import { useState } from "react";
import BackgroundVisuals from "../components/BackgroundVisuals";

export const backendUrl = "https://zuris-backend.vercel.app"; 

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    company: "",
    service: "",
    project_details: "",
    phoneNumber: "" 
  });

  const submithandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { fullname, email, company, service, project_details, phoneNumber } = form;
      
      // Validate required fields
      if (!fullname || !email || !company || !project_details) {
        alert("Please fill in all required fields");
        setLoading(false);
        return;
      }

      const response = await axios.post(backendUrl + '/api/form/submit', { fullname, email, company, service, project_details, phoneNumber },
       
      );
      console.log(response)
      
      if (response.data.success) {
        alert("Message sent successfully! We'll contact you within 48 hours.");
        console.log(response.data.message);
      } else {
        alert("Failed to send message. Please try again.");
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      
      if (error.code === 'ECONNABORTED') {
        alert("Request timed out. Please check your connection and try again.");
      } else if (error.response) {
        alert(`Server error: ${error.response.status}. Please try again later.`);
      } else if (error.request) {
        alert("Network error. Please check your connection and try again.");
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
      
      setForm({
        fullname: '',
        email: '',
        company: '',
        service: '',
        project_details: '',
        phoneNumber: ''
      });
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 relative">
      <BackgroundVisuals />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-600">Ready to transform your business with AI? Let's start the conversation.</p>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <form className="space-y-6" onSubmit={submithandler}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  value={form.fullname} 
                  onChange={(e) => setForm({...form, fullname: e.target.value})} 
                  type="text" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  value={form.email} 
                  onChange={(e) => setForm({...form, email: e.target.value})} 
                  type="email" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="your@email.com" 
                  required 
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company <span className="text-red-500">*</span>
                </label>
                <input 
                  value={form.company} 
                  onChange={(e) => setForm({...form, company: e.target.value})} 
                  type="text" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="Your Company" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  value={form.phoneNumber} 
                  onChange={(e) => setForm({...form, phoneNumber: e.target.value})} 
                  type="tel" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="+91 xxxxx xxxxx" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
              <select 
                value={form.service} 
                onChange={(e) => setForm({...form, service: e.target.value})} 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              
                <option value="">Select a service</option>
                <option value="AI Consultation & Advisory">AI Consultation & Advisory</option>
                <option value="Cybersecurity Services">Cybersecurity Services</option>
                <option value="AI Automation & Transformation">AI Automation & Transformation</option>
                <option value="Collaborative Development">Collaborative Development</option>
                <option value="Startup Growth & Acceleration">Startup Growth & Acceleration</option>
                <option value="Data Intelligence & Analytics Platform">Data Intelligence & Analytics Platform</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Details <span className="text-red-500">*</span>
              </label>
              <textarea 
                value={form.project_details} 
                onChange={(e) => setForm({...form, project_details: e.target.value})} 
                rows="6" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Tell us about your AI project, goals, timeline, and any specific requirements..."
                required
              />
            </div>
            
            <button 
              disabled={loading} 
              type="submit" 
              className="w-full px bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Sending..." : "Submit & Book Consultation"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
