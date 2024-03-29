"use client";

import Card from "../components/card";

export default function LevelsPage() {
    return (
        <div className="mx-auto container">
            <div className="min-h-[100vh] flex justify-center items-center flex-col">
            <h2 className="text-4xl">Hangi seviye teste girmek istiyorsunuz?</h2>
            <p className="w-[50%] text-center my-5 opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis esse aliquam veniam accusantium, eaque recusandae porro.</p>

            <div className="h-[300px] overflow-auto px-10">
                <Card head="Temel seviye JavaScript Testi"  number="1" description="Bu testte 15 soruluktur ve sizin temel js bilginizi ölçer." />
                <Card head="Temel seviye JavaScript Testi"  number="1" description="Bu testte 15 soruluktur ve sizin temel js bilginizi ölçer." />
                <Card head="Temel seviye JavaScript Testi"  number="1" description="Bu testte 15 soruluktur ve sizin temel js bilginizi ölçer." />
                <Card head="Temel seviye JavaScript Testi"  number="1" description="Bu testte 15 soruluktur ve sizin temel js bilginizi ölçer." />
                <Card head="Temel seviye JavaScript Testi"  number="1" description="Bu testte 15 soruluktur ve sizin temel js bilginizi ölçer." />
                <Card head="Temel seviye JavaScript Testi"  number="1" description="Bu testte 15 soruluktur ve sizin temel js bilginizi ölçer." />
                <Card head="Temel seviye JavaScript Testi"  number="1" description="Bu testte 15 soruluktur ve sizin temel js bilginizi ölçer." />
                <Card head="Temel seviye JavaScript Testi"  number="1" description="Bu testte 15 soruluktur ve sizin temel js bilginizi ölçer." />
                <Card head="Temel seviye JavaScript Testi"  number="1" description="Bu testte 15 soruluktur ve sizin temel js bilginizi ölçer." />
            </div>
            </div>
        </div>

    )
}