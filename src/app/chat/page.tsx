'use client';
import Header from '@/components/ui/header';
import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUp } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { UserAvatar } from '@/components/ui/user-avatar';
import { cn } from '@/lib/utils';
import { AIAvatar } from '@/components/ui/ai-avatar';
import { currentUser } from '@clerk/nextjs/server';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    const messageEndRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <main>
            <Header />
            <div className='fixed 
            top-20 
            bottom-20 
            left-0 
            right-0 w-[85%] pl-80 overflow-y-auto'>
                {messages.length !== 0 ? (
                    <div>
                        {messages.map(m => (
                            <div key={m.content} className={cn("whitespace-pre-wrap p-5 pl-[12%] pr-[16%] items-start rounded-lg",
                                m.role === "user" ?
                                    "bg-white border border-black/10 mb-5" :
                                    "bg-muted mb-5")}>
                                {m.role === 'user' ? <UserAvatar /> : <AIAvatar />}
                                {m.content}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <div className='w-full flex justify-center pt-32'>
                            <Image src={logo} alt='IntelliCompanion Logo' className='w-[3%] h-[3%]'></Image>
                        </div>
                        <div className='w-full flex justify-center mt-4'>
                            <h1 className='font-bold text-3xl'>
                                How can I help you today?
                            </h1>
                        </div>
                    </div>
                )}
                <div ref={messageEndRef} />
                <form onSubmit={handleSubmit}
                    className='p-5 fixed bottom-0 left-0 w-[75%] mx-auto right-0'>
                    <Input
                        required
                        value={input}
                        placeholder="Message IntelliCompanion..."
                        onChange={handleInputChange}
                        autoFocus
                        spellCheck={false}
                        className='w-11/12 border text-sm p-5 pr-16 rounded-xl resize-none h-12' />
                    <Button type="submit" className='absolute p-6 rounded-xl right-0 mr-24 bottom-5 h-12'>
                        <ArrowUp />
                    </Button>
                </form>
            </div>
        </main>
    );
}

