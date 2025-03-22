'use client';

import { useEffect, useState } from 'react';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Settings2 } from 'lucide-react';

export interface EditorSettings {
    fontFamily: string;
    fontSize: number;
    letterSpacing: number;
    lineHeight: number;
    darkMode: boolean;
    reducedMotion: boolean;
}

const defaultSettings: EditorSettings = {
    fontFamily: 'OpenDyslexic',
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 1.5,
    darkMode: false,
    reducedMotion: false,
};

interface EditorSettingsProps {
    onChange: (settings: EditorSettings) => void;
}

export function EditorSettings({ onChange }: EditorSettingsProps) {
    const [settings, setSettings] = useState<EditorSettings>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('editorSettings');
            if (saved) {
                return JSON.parse(saved);
            }
        }
        return defaultSettings;
    });

    useEffect(() => {
        localStorage.setItem('editorSettings', JSON.stringify(settings));
        onChange(settings);

        // Apply settings to CSS variables
        document.documentElement.style.setProperty('--font-family', settings.fontFamily);
        document.documentElement.style.setProperty('--font-size', `${settings.fontSize}px`);
        document.documentElement.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);
        document.documentElement.style.setProperty('--line-height', settings.lineHeight.toString());

        // Apply dark mode
        if (settings.darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Apply reduced motion
        if (settings.reducedMotion) {
            document.documentElement.classList.add('motion-reduce');
        } else {
            document.documentElement.classList.remove('motion-reduce');
        }
    }, [settings, onChange]);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Settings2 className="h-4 w-4" />
                    <span className="sr-only">Open settings</span>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Editor Settings</SheetTitle>
                    <SheetDescription>
                        Customize your writing experience
                    </SheetDescription>
                </SheetHeader>

                <div className="space-y-6 py-4">
                    <div className="space-y-2">
                        <Label>Font Family</Label>
                        <Select
                            value={settings.fontFamily}
                            onValueChange={(value) => setSettings({ ...settings, fontFamily: value })}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="OpenDyslexic">OpenDyslexic</SelectItem>
                                <SelectItem value="LexieReadable">Lexie Readable</SelectItem>
                                <SelectItem value="system">System Font</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Font Size ({settings.fontSize}px)</Label>
                        <Slider
                            value={[settings.fontSize]}
                            min={12}
                            max={32}
                            step={1}
                            onValueChange={([value]) => setSettings({ ...settings, fontSize: value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Letter Spacing ({settings.letterSpacing}px)</Label>
                        <Slider
                            value={[settings.letterSpacing]}
                            min={0}
                            max={10}
                            step={0.5}
                            onValueChange={([value]) => setSettings({ ...settings, letterSpacing: value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Line Height ({settings.lineHeight})</Label>
                        <Slider
                            value={[settings.lineHeight]}
                            min={1}
                            max={3}
                            step={0.1}
                            onValueChange={([value]) => setSettings({ ...settings, lineHeight: value })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label>Dark Mode</Label>
                        <Switch
                            checked={settings.darkMode}
                            onCheckedChange={(checked) => setSettings({ ...settings, darkMode: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label>Reduced Motion</Label>
                        <Switch
                            checked={settings.reducedMotion}
                            onCheckedChange={(checked) => setSettings({ ...settings, reducedMotion: checked })}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
} 