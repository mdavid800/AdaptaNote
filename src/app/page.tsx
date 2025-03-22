export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Welcome to DyslexAI Notebook</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Your accessible writing companion designed to assist individuals with dyslexia.
            </p>
            <div className="grid gap-6">
                {/* Editor placeholder */}
                <div className="border rounded-lg p-6 min-h-[400px] bg-card">
                    <p className="text-muted-foreground">Editor coming soon...</p>
                </div>
            </div>
        </div>
    );
} 