'use client';

import { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editor-js';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';

interface EditorProps {
    onChange?: (data: any) => void;
    initialData?: any;
    editorRef?: React.MutableRefObject<EditorJS | null>;
}

export function Editor({ onChange, initialData, editorRef }: EditorProps) {
    const _editorRef = useRef<EditorJS | null>(null);
    const ref = editorRef || _editorRef;

    useEffect(() => {
        if (!ref.current) {
            const editor = new EditorJS({
                holder: 'editor',
                tools: {
                    header: {
                        class: Header,
                        config: {
                            levels: [1, 2, 3],
                            defaultLevel: 1
                        }
                    },
                    list: {
                        class: List,
                        inlineToolbar: true
                    },
                    paragraph: {
                        class: Paragraph,
                        inlineToolbar: true
                    }
                },
                data: initialData,
                onChange: async () => {
                    const data = await ref.current?.save();
                    onChange?.(data);
                },
            });

            ref.current = editor;
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
                ref.current = null;
            }
        };
    }, []);

    return (
        <div
            id="editor"
            className="prose prose-lg dark:prose-invert max-w-none"
            style={{
                fontFamily: 'var(--font-family)',
                letterSpacing: 'var(--letter-spacing)',
                lineHeight: 'var(--line-height)',
                fontSize: 'var(--font-size)',
            }}
        />
    );
} 