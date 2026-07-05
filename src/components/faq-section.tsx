'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faq } from '@/data/faq';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 bg-surface-muted dark:bg-surface-dark">
      <div className="container mx-auto px-[7%] max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {faq.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-surface-dark-muted rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-text dark:text-text-dark pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-text-muted dark:text-text-dark-muted transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openId === item.id ? '200px' : '0px',
                }}
              >
                <p className="px-5 pb-5 text-text-muted dark:text-text-dark-muted text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
