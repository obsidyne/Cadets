'use client';

import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "What is Customs Cadet Corps?",
    answer: "Customs Cadet Corps is a premier training institution dedicated to preparing individuals for successful careers in customs and international trade. We offer comprehensive programs that combine theoretical knowledge with practical skills, taught by experienced customs professionals."
  },
  {
    id: 2,
    question: "Who can join the training programs?",
    answer: "Our programs are open to graduates, working professionals, and anyone interested in pursuing a career in customs, border protection, or international trade. No prior experience is required for our foundation courses, while advanced programs may have specific prerequisites."
  },
  {
    id: 3,
    question: "What is the duration of the training programs?",
    answer: "Program durations vary based on the course level. Our foundation courses run for 3-6 months, intermediate programs for 6-9 months, and advanced specialized training can extend up to 12 months. We also offer weekend and flexible learning options for working professionals."
  },
  {
    id: 4,
    question: "Are the certifications recognized by government agencies?",
    answer: "Yes, our certifications are recognized by relevant customs and trade authorities. We maintain partnerships with government agencies and industry bodies to ensure our training meets official standards and requirements."
  },
  {
    id: 5,
    question: "What career opportunities are available after completion?",
    answer: "Graduates can pursue careers as Customs Officers, Trade Compliance Specialists, Freight Forwarders, Import/Export Managers, Border Security Personnel, and Trade Consultants. We also provide placement assistance and career counseling to all our students."
  },
  {
    id: 6,
    question: "Do you offer online or distance learning options?",
    answer: "Yes, we offer both in-person and online learning formats. Our hybrid model allows students to attend live virtual classes, access recorded sessions, and participate in interactive workshops, making it convenient for students from anywhere in the world."
  },
  {
    id: 7,
    question: "What is the admission process?",
    answer: "The admission process involves submitting an online application, document verification, and a brief counseling session. For certain advanced programs, we may conduct an aptitude assessment. Once approved, you can complete the enrollment and begin your training journey."
  },
  {
    id: 8,
    question: "Are there any scholarship or financial aid options available?",
    answer: "Yes, we offer merit-based scholarships, early bird discounts, and flexible payment plans. We also have special provisions for veterans, government employees, and students from economically disadvantaged backgrounds. Contact our admissions team for more details."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq py-20 px-6 --bg-white max-lg:py-16 max-sm:py-12 max-sm:px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16 max-sm:mb-12">
          <h2 className="font-['Special_Gothic_Expanded_One',sans-serif] text-[clamp(2rem,6vw,3.5rem)] font-bold mb-4 bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed max-sm:text-base">
            Got questions? We've got answers. Find everything you need to know about our programs.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="group bg-white rounded-xl border-2 border-gray-200 hover:border-[#93254A] transition-all duration-300 overflow-hidden"
              style={{
                animation: 'fadeInUp 0.5s ease-out forwards',
                animationDelay: `${index * 0.08}s`,
                opacity: 0
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex justify-between items-start text-left transition-colors duration-200 max-sm:px-4 max-sm:py-4"
              >
                <span className="text-lg font-bold text-gray-800 pr-8 max-sm:text-base max-sm:pr-4">
                  {faq.question}
                </span>
                
                {/* Icon */}
                <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                  openId === faq.id ? 'rotate-180' : ''
                }`}>
                  <svg 
                    className="w-6 h-6 text-[#93254A]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-0 max-sm:px-4">
                  <div className="h-[2px] bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] mb-4 opacity-20"></div>
                  <p className="text-gray-600 leading-relaxed text-base max-sm:text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center p-10 rounded-2xl border-4 border-gray-200 max-sm:p-6 max-sm:mt-12">
          <h3 className="font-['Special_Gothic_Expanded_One',sans-serif] text-[clamp(1.5rem,5vw,2.5rem)] font-bold mb-3 bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] bg-clip-text text-transparent">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 text-base leading-relaxed max-sm:text-sm max-sm:mb-5">
            Our team is here to help. Reach out to us for personalized assistance.
          </p>
          <button className="py-3 px-10 bg-gradient-to-r from-[#93254A] to-[#0B454E] text-white font-bold rounded-full border-none cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg text-base max-sm:px-8 max-sm:text-sm">
            Contact Us
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}