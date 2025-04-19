'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Loader2, Clock, Check, CheckCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

const BOT_RESPONSES = {
  greeting: "Hello! I'm HydroMan, your hydropower expert. How can I assist you today?",
  services: "We offer a range of hydropower services including:\n• Feasibility Studies\n• Project Development\n• Operational Optimization\n• Maintenance Services\n• Technical Consultancy",
  contact: "You can reach us at:\n📧 info@hydroplan.com\n📞 +44 (0) 1234 567890\n📍 Our office is located in the UK",
  hydropower: "Hydropower is a renewable energy source that generates electricity by using the energy of flowing water. It's one of the most efficient and reliable forms of renewable energy, with typical efficiency rates of 90% or higher.",
  smallHydro: "Small hydropower systems typically generate between 1-10MW of power. They're ideal for:\n• Remote locations\n• Community power projects\n• Industrial applications\n• Agricultural operations",
  maintenance: "Our maintenance services include:\n• Regular system inspections\n• Turbine maintenance\n• Generator servicing\n• Control system updates\n• Emergency response",
  feasibility: "A hydropower feasibility study typically includes:\n• Site assessment\n• Flow analysis\n• Environmental impact\n• Cost estimation\n• ROI calculation\n• Regulatory requirements",
  default: "I'm here to help with your hydropower questions. You can ask about:\n• General hydropower information\n• Small hydropower systems\n• Maintenance services\n• Feasibility studies\n• Our services\n• Contact information"
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return BOT_RESPONSES.greeting;
    } else if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return BOT_RESPONSES.services;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return BOT_RESPONSES.contact;
    } else if (lowerMessage.includes('what is hydropower') || lowerMessage.includes('explain hydropower')) {
      return BOT_RESPONSES.hydropower;
    } else if (lowerMessage.includes('small hydro') || lowerMessage.includes('small scale')) {
      return BOT_RESPONSES.smallHydro;
    } else if (lowerMessage.includes('maintenance') || lowerMessage.includes('repair')) {
      return BOT_RESPONSES.maintenance;
    } else if (lowerMessage.includes('feasibility') || lowerMessage.includes('study')) {
      return BOT_RESPONSES.feasibility;
    }
    return BOT_RESPONSES.default;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date(),
      status: 'sent'
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);

    // Update message status
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg === newMessage ? { ...msg, status: 'delivered' } : msg
      ));
    }, 500);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { 
        text: botResponse, 
        isUser: false,
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="rounded-full w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg"
            >
              <MessageSquare className="w-6 h-6 text-white" />
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="w-80 h-[500px] bg-white shadow-xl rounded-lg flex flex-col">
              <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <h3 className="font-semibold">HydroMan Assistant</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 hover:bg-blue-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-4 ${
                      message.isUser ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.text.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                      <div className="flex items-center gap-1 mt-1 text-xs opacity-70">
                        <Clock className="h-3 w-3" />
                        <span>{format(message.timestamp, 'HH:mm')}</span>
                        {message.isUser && (
                          <>
                            {message.status === 'sent' && <Check className="h-3 w-3 ml-1" />}
                            {message.status === 'delivered' && <CheckCheck className="h-3 w-3 ml-1" />}
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                    <span className="text-sm text-gray-500">HydroMan is typing...</span>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about hydropower..."
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                    disabled={isTyping}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 