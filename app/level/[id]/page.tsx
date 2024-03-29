"use client";
import QuestionsBox from "@/app/components/questionBox";
import Link from "next/link";
import { useState } from 'react';

export default function QuestionsPage() {
    const [question, setQuestion] = useState(false)
    const handleStartQuiz = () => {
        setQuestion(true)
    }

    return (
        <div className="mx-auto container ">
            <div className="min-h-[100vh] flex justify-center items-center flex-col">
                <div className="flex gap-10">
                <button onClick={handleStartQuiz}  className="border-b border-t h-12 flex items-center justify-center px-10 ">
                    <span className="transition-all ease-out hover:-translate-y-1">Teste Başla</span>
                </button>
                <Link href={{
                    query: { question: '1' },
                }} className="border-b border-t h-12 flex items-center justify-center px-10">
                    <span className="transition-all ease-out hover:-translate-y-1">Deneme Testi</span>
                </Link>
                </div>
                {question && <QuestionsBox />}
            </div>
        </div>
    )
}