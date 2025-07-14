import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import arrowDown2 from '../assets/image/contact.png';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <img 
        src={arrowDown2}
        alt="Customer support representative" 
        className="w-full rounded-lg h-64 object-cover mb-6"
      />
      
      <p className="text-gray-700 mb-8">
        We would love to hear from you! Whether you have a question about your application, 
        eligibility, or the process — we're here to help.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <p className="font-medium">2nd Floor, Trust House, Ridge, Lagos, Nigeria.</p>
            <p className="text-gray-600">Mon – Fri | 9:00 AM – 5:00 PM (WAT)</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Mail className="text-blue-600 mr-3 flex-shrink-0" />
          <a 
            href="mailto:scholarships@capstonefund.ng" 
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            scholarships@capstonefund.ng
          </a>
        </div>
        
        <div className="flex items-start">
          <Phone className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <p>+234 (0) 803 123 4567</p>
            <p>+234 (0) 803 123 4568</p>
          </div>
        </div>
        
        <div className="flex items-center mt-4">
          <Clock className="text-blue-600 mr-3 flex-shrink-0" />
          <p>Response Time: Within 24-48 hours</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;