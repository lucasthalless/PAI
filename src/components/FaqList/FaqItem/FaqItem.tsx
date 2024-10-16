'use client'

import { ReactNode, useState } from 'react';
import './style.css';

interface FaqItemProps {
  question: string;
  answer: ReactNode;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='faq-item'>
      <div
        onClick={toggleDropdown}
        className='faq-question'
      >
        <span>{question}</span>
        <span className={`faq-plus-icon ${isOpen ? 'faq-open' : ''}`}>+</span>
      </div>

      <div className={`faq-answer ${isOpen ? 'faq-open-answer' : ''}`}>
        <div>{answer}</div>
      </div>
    </div>
  );
};
