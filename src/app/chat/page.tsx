"use client"
import Image from 'next/image'
import Chat from '@/app/components/screens/chat'

export default function ChatPage() {
    return (
        <main className="flex flex-col h-screen">
            <div className="flex-grow overflow-hidden">
                <Chat />
            </div>
        </main>
    )
}
