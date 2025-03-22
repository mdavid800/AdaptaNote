import Link from 'next/link';

export function Header() {
    return (
        <header className="border-b border-gray-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-2xl font-merriweather font-bold">
                        AdaptaNote
                    </Link>
                    <span className="text-sm text-muted-foreground">
                        Your accessible Notebook
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
                        Save
                    </button>
                    <button
                        className="p-2 hover:bg-gray-100 rounded-full"
                        aria-label="More options"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
                        </svg>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gray-300">
                        {/* Avatar placeholder */}
                    </div>
                </div>
            </div>
        </header>
    );
} 