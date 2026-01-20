import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Crafweb provide?",
    answer: "We offer website development, UI/UX design, SEO optimization, and custom web solutions for businesses."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most standard websites are completed within 5–10 days. Larger or custom projects may take longer."
  },
  {
    question: "Do you create mobile-friendly websites?",
    answer: "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop devices."
  },
  {
    question: "What is your payment process?",
    answer: "We require 50% advance payment to start the project, and the remaining 50% after project completion."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Absolutely! We can modernize your current website with a fresh design, better performance, and improved user experience."
  },
  {
    question: "Do you provide website maintenance services?",
    answer: "Yes, we offer ongoing maintenance, updates, and support to keep your website secure and up to date."
  },
  {
    question: "Will my website be SEO-friendly?",
    answer: "Yes, we follow SEO best practices to ensure your website is optimized for better search engine rankings."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Everything you need to know about our process and services. Can't find the answer? Contact our support team.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group border border-gray-800 rounded-2xl transition-all duration-300 ${
                  isOpen ? "bg-gray-800/50 shadow-lg" : "bg-gray-800/20 hover:bg-gray-800/40"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-medium md:text-lg transition-colors duration-300 ${
                    isOpen ? "text-blue-400" : "text-gray-200"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 p-1 rounded-full bg-gray-700/50 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-blue-500/20" : ""
                  }`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? "text-blue-400" : "text-gray-400"}`} />
                  </div>
                </button>

                {/* Animated Answer Section */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-700/50 pt-4 mx-5 md:mx-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;