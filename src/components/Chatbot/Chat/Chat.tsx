"use client"

import { getBotResponse } from '@src/lib/actions';
import Image from 'next/image';
import { Fragment, useEffect, useRef, useState } from 'react';
import './style.css';

interface Message {
  sender: 'user' | 'bot';
  content: string;
  options?: string[];
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([{sender: 'bot', content: 'Com o que o PAI pode te ajudar hoje?'}]);
  const [input, setInput] = useState<string>('');
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { sender: 'user', content: input }]);
    setInput('');
    const botResponse = await getBotResponse(input);
    setMessages((prev) => [...prev, { sender: 'bot', content: botResponse.responseWA, options: botResponse.options ?? undefined }]);
  };

  const sendOption = async (option: string) => {
    if (!option) return;

    setMessages([...messages, { sender: 'user', content: option }]);
    const botResponse = await getBotResponse(option);
    setMessages((prev) => [...prev, { sender: 'bot', content: botResponse.responseWA, options: botResponse.options ?? undefined }]);
  }

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div>
      <div className="chat">
        {messages.map((message, index) => (
          <>
            <div key={index} className={`message ${message.sender}`}>
              {message.content.split('\n').map((text, index) => (
                <Fragment key={index}>
                  {text}
                  <br />
                </Fragment>
              ))}
            </div>
            {
              message.options ?
                <div className='options-wrapper'>
                  {message.options.map((option, index) =>
                    <button
                      onClick={() => {
                        sendOption(option);
                      }}
                      key={index} className='chat-option-button'
                    >
                      {option}
                    </button>
                  )}
                </div>
                :
                null
            }
          </>
        ))}
        <div ref={endOfMessagesRef}></div>
      </div>

      <div className="chat-input">
        <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Como o PAI pode te ajudar hoje?"
      />
        <div className="chatbot-input-actions">
          <Image src="/mic-on.svg" alt="Gravar audio." width={24} height={24} />
          <Image onClick={sendMessage} src="/send.svg" alt="Enviar mensagem." width={24} height={24} />
        </div>
      </div>
    </div>
  );
};