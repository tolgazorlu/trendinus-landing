import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What exactly do I get when I purchase a package?",
    answer:
      "You get a professionally crafted email campaign sent to Twitch streamers who are likely to be interested in your game. We deliver your Steam keys, demo keys, or a demo link directly to their inbox — and you don't need to do anything else.",
  },
  {
    id: "faq-2",
    question: "How do you choose which streamers to contact?",
    answer:
      "We've built a large, categorized database of Twitch streamers who have previously played games similar to yours. Based on the information you provide during checkout, we'll match your game with the most relevant streamers.",
  },
  {
    id: "faq-3",
    question: "Will I know if the emails are opened?",
    answer: (
      <div>
        <p>
          Yes! All packages from 500 emails and above include a minimum open
          rate guarantee:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>500 emails → at least 150 opens</li>
          <li>1000 emails → at least 300 opens</li>
          <li>2000 emails → at least 600 opens</li>
        </ul>
        <p className="mt-2">
          If we don't hit these numbers, we'll send another round of emails —
          free of charge.
        </p>
      </div>
    ),
  },
  {
    id: "faq-4",
    question: "Will I get a list of the streamers contacted?",
    answer:
      "No. To protect streamer privacy and prevent spam, we do not share their personal contact details. However, you'll receive a report showing the performance of your campaign (open rate, delivery status, etc.).",
  },
  {
    id: "faq-5",
    question: "Can I include a trailer or press kit?",
    answer:
      "Yes. After completing your purchase, you can include any supporting links (e.g., press kit, trailer, Steam page) by replying to the confirmation email. We'll make sure the email is attractive, informative, and clear.",
  },
  {
    id: "faq-6",
    question: "What kind of games are accepted?",
    answer:
      "We work with all kinds of indie games — from FPS and roguelikes to cozy sims and visual novels. However, we reserve the right to reject campaigns that include offensive, scammy, or misleading content.",
  },
  {
    id: "faq-7",
    question: "How long does it take to deliver my campaign?",
    answer:
      "Campaigns are usually sent out within 24–48 hours of your purchase. You'll be notified once it's completed.",
  },
  {
    id: "faq-8",
    question:
      "If I use this service for my game, will my information stay private?",
    answer:
      "Absolutely. Your game data, email address, Steam keys, and any other information you provide are kept strictly confidential. We never share your campaign details with third parties, and your personal or company information is never sold, published, or made publicly available. We only use your data to carry out your outreach campaign — nothing more.",
  },
  {
    id: "faq-9",
    question: "I have a different question — can I talk to someone?",
    answer: (
      <p>
        Of course! Just email us at{" "}
        <a
          href="mailto:info@trendinus.com"
          className="text-blue-400 hover:underline"
        >
          info@trendinus.com
        </a>{" "}
        or join our Discord community for faster support.
      </p>
    ),
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleFAQ = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="p-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-gray-700">
            <button
              onClick={() => toggleFAQ(item.id)}
              className="flex justify-between items-center w-full py-4 text-left font-semibold text-xl text-white hover:text-gray-300 transition-colors"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ${
                  openItems.has(item.id) ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {openItems.has(item.id) && (
              <div className="py-2 pb-4 text-gray-300">
                {typeof item.answer === "string" ? (
                  <p>{item.answer}</p>
                ) : (
                  item.answer
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
