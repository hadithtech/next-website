import React from 'react';

interface StatCardProps {
    number: string;
    label: string;
    icon: string;
}

const StatCard = ({ number, label, icon }: StatCardProps) => (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background/50 backdrop-blur border hover:shadow-lg transition-all">
        <div className="text-4xl mb-2">{icon}</div>
        <div className="text-4xl font-bold text-primary mb-1">{number}</div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
);

const Stats = () => {
    return (
        <section className="py-20 bg-secondary/20">
            <div className="container">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <StatCard number="36+" label="Episodes" icon="🎙️" />
                    <StatCard number="50+" label="Expert Guests" icon="👥" />
                    <StatCard number="10K+" label="Listeners" icon="👂" />
                    <StatCard number="2" label="Languages" icon="🌍" />
                </div>
            </div>
        </section>
    );
};

export default Stats;
