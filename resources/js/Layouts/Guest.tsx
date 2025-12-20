import React from 'react';
import {Link} from '@inertiajs/inertia-react';

interface Props {
    children: React.ReactNode;
}

export default function Guest({ children }: Props) {
    return (
        <div
            className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0"
            style={{
                backgroundImage: "linear-gradient(135deg, rgba(255, 94, 126, 0.85), rgba(60, 80, 255, 0.75)), url('/img/background.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div>
                <Link href="/" className="text-4xl font-bold text-white" style={{fontWeight: 800, letterSpacing: "0.08em"}}>
                    UniverseWeb
                </Link>
            </div>

            <div
                className="glass-card w-full sm:max-w-md mt-6 px-6 py-4 overflow-hidden sm:rounded-lg"
            >
                {children}
            </div>
        </div>
    );
}
