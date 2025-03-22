'use client';

import { useState } from 'react';
import Editor from '@/components/Editor';
import EditorSettings, { EditorSettings as EditorSettingsType } from '@/components/EditorSettings';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Settings } from 'lucide-react';

export default function EditorPage() {
    const [editorData, setEditorData] = useState<any>(null);
    const [settings, setSettings] = useState<EditorSettingsType>({
        fontFamily: 'system',
        fontSize: 16,
        letterSpacing: 0,
        lineHeight: 1.5,
        darkMode: false,
        reducedMotion: false,
        highContrast: false,
    });

    const handleEditorChange = (data: any) => {
        setEditorData(data);
        // Here you can implement autosave or other data handling
        console.log('Editor data:', data);
    };

    const handleSettingsChange = (newSettings: EditorSettingsType) => {
        setSettings(newSettings);
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">AdaptaNote Editor</h1>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Settings className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Editor Settings</SheetTitle>
                            </SheetHeader>
                            <EditorSettings onSettingsChange={handleSettingsChange} />
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <Editor
                        onChange={handleEditorChange}
                        settings={settings}
                    />
                </div>
            </div>
        </main>
    );
} 