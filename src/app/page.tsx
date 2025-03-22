'use client';

import { useState } from 'react';
import { Editor } from '@/components/Editor';
import { EditorSettings, type EditorSettings as EditorSettingsType } from '@/components/EditorSettings';

export default function Home() {
    const [editorData, setEditorData] = useState<any>(null);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">AdaptaNote</h1>
                <EditorSettings
                    onChange={(settings) => {
                        // Settings are automatically applied via CSS variables
                        console.log('Settings updated:', settings);
                    }}
                />
            </div>
            <div className="border rounded-lg p-6 min-h-[600px] bg-card">
                <Editor
                    onChange={(data) => {
                        setEditorData(data);
                        // You might want to save this to localStorage or your backend
                        console.log('Editor data:', data);
                    }}
                    initialData={editorData}
                />
            </div>
        </div>
    );
} 