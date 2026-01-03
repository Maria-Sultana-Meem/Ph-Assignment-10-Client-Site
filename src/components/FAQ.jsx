import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this platform free?",
      answer: "Yes, signing up and browsing jobs is completely free. Some premium features may be available later."
    },
    {
      question: "How do I post a job?",
      answer: "After signing in, go to the 'Create a Job' section, fill out the job details, and submit."
    },
    {
      question: "Can I apply to multiple jobs?",
      answer: "Yes, you can browse all available jobs and accept or apply to as many as you qualify for."
    },
    {
      question: "How do I contact a job poster?",
      answer: "Each job has the poster's email or contact info. You can reach out directly after accepting the task."
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely! We use Firebase Authentication and secure database storage to protect all your data."
    },
    {
      question: "Can I edit or delete a job I posted?",
      answer: "Yes, you can update or delete any job you posted from your dashboard anytime."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked <span className="text-orange-500">Questions</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              {openIndex === index ? (
                <IoIosArrowUp size={20} className="text-orange-500" />
              ) : (
                <IoIosArrowDown size={20} className="text-orange-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-600 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
