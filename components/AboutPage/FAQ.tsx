import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const faqData = [
  {
    id: "item-1",
    question: "What is Tripi?",
    answer: `Tripi is your all-in-one travel companion designed to make exploring the world easier, personalized, and more enjoyable. 
             We help you plan trips, discover hidden gems, and book experiences with ease.`,
  },
  {
    id: "item-2",
    question: "How does Tripi personalize my travel experience?",
    answer: `Tripi curates recommendations and itineraries based on your interests, budget, and travel style. 
             Whether you prefer adventure, culture, or relaxation, we provide tailored suggestions just for you.`,
  },
  {
    id: "item-3",
    question: "Can I book accommodations and activities directly on Tripi?",
    answer: `Yes! Tripi offers seamless booking options for stays, tours, and activities. 
             We partner with trusted providers to ensure a safe and smooth booking experience.`,
  },
  {
    id: "item-4",
    question: "Is Tripi suitable for budget travelers?",
    answer: `Absolutely. Tripi is built for every kind of traveler. 
             We provide budget-friendly options, smart travel hacks, and tips to help you save while still enjoying memorable experiences.`,
  },
  {
    id: "item-5",
    question: "How does Tripi ensure travel safety?",
    answer: `We only work with verified hosts, guides, and partners to ensure your safety and comfort. 
             Our platform highlights trusted experiences and provides guidance for secure and worry-free travel.`,
  },
];

const FAQ = () => {
  return (
    <div className="w-[95%] max-w-6xl h-full p-4 sm:p-6 mt-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <div className="col-span-1 flex items-center justify-center">
        <Image
          src="/images/Aboutus/FAQ.jpg"
          height={400}
          width={600}
          alt="aboutus"
          className="w-full h-48 sm:h-64 md:h-72 lg:h-96 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="col-span-1 p-2 sm:p-4">
        <h1 className="text-blue-950 text-2xl sm:text-3xl font-bold mb-6 md:mb-10">
          FAQ
        </h1>
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="mb-1 rounded-lg"
              >
                <AccordionTrigger className="bg-gray-300 p-4 rounded-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 bg-gray-200 mt-1 rounded-lg p-4">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
