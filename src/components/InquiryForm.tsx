
import { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface InquiryFormProps {
  productName: string;
}

const InquiryForm = ({ productName }: InquiryFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    quantity: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the data to a server
    // For now, let's just show a success message
    toast({
      title: "Inquiry Sent!",
      description: "We've received your inquiry and will contact you soon.",
    });
    
    // Reset form
    setFormData({
      companyName: '',
      quantity: '',
      phone: '',
      email: '',
      message: ''
    });
    
    // Create WhatsApp message (in a real app, this might be handled by the backend)
    const message = `
      *Inquiry for ${productName}*
      Company: ${formData.companyName}
      Quantity: ${formData.quantity}
      Email: ${formData.email}
      Message: ${formData.message}
    `;
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Send size={20} className="mr-2 text-cassa-yellow" />
        Send Product Inquiry
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name*
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cassa-yellow"
          />
        </div>
        
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
            Order Quantity*
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cassa-yellow"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number / WhatsApp*
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone size={16} className="text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cassa-yellow"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email*
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail size={16} className="text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cassa-yellow"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cassa-yellow"
          ></textarea>
        </div>
        
        <div className="!mt-6">
          <button
            type="submit"
            className="w-full btn-primary flex items-center justify-center"
          >
            <Send size={18} className="mr-2" />
            Send Inquiry
          </button>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By sending this inquiry, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default InquiryForm;
