# DyslexAI Notebook: Core Principles

## Project Overview

DyslexAI Notebook is a web-based writing application specifically designed to assist individuals with dyslexia. The application combines accessible design principles with modern AI capabilities to create a frictionless writing experience that reduces cognitive load and increases productivity for users with reading and writing differences.

## Key Features

1. **Dyslexia-Friendly Typography**
   - Implementation of OpenDyslexic, Lexie Readable, and other dyslexia-optimized fonts
   - Adjustable letter spacing, line height, and character width
   - Customizable font weight and size
   - Optional highlighting of syllables for complex words

2. **Visual Customization**
   - Fully customizable background colors with presets optimized for reducing visual stress
   - Adjustable contrast settings between text and background
   - Optional reading ruler/guide that follows cursor position
   - Dark mode and reduced motion settings

3. **Text-to-Speech Integration**
   - Real-time reading of text as it's written or selected
   - Adjustable speech rate, pitch, and voice selection
   - Highlighting of text as it's being read
   - Option to export notes as audio files

4. **AI-Powered Writing Assistance**
   - Block-by-block spell checking with dyslexia-aware corrections
   - Grammar suggestions that respect the writer's style and voice
   - Predictive text that reduces typing effort
   - Context-aware synonyms and word finding assistance

5. **Premium Writing Experience**
   - Clean, distraction-free interface inspired by Medium
   - Block-based editing using EditorJS for flexible content structuring
   - Seamless transitions between reading and editing modes
   - Autosave and version history

## Technical Architecture

### Frontend Stack
- **Next.js** as the React framework for server-side rendering and optimized performance
- **EditorJS** as the foundation for the block-based editor experience
- **shadcn/ui** for consistent, accessible UI components
- **Tailwind CSS** for styling with accessibility considerations built-in

### Backend & AI Components
- **Next.js API Routes** for serverless function handling
- **Google Gemini 2.0 Flash API** for cost-effective AI-powered spelling/grammar correction and text prediction
- **Web Speech API** for text-to-speech functionality
- **Local Storage** + database sync for offline capabilities and data persistence

## Accessibility First Principles

1. **Reduce Cognitive Load**
   - Break tasks into manageable components
   - Minimize distractions in the UI
   - Provide clear, consistent navigation
   - Use recognizable icons with text labels

2. **Support Multiple Learning Modalities**
   - Combine visual, auditory, and interactive elements
   - Allow users to process information in their preferred way
   - Provide alternative methods for every key action

3. **Personalize the Experience**
   - Remember user preferences across sessions
   - Allow granular control over accessibility features
   - Avoid overwhelming with too many options at once
   - Provide sensible defaults with easy customization paths

4. **Error Tolerance and Recovery**
   - Design for forgiving input handling
   - Provide clear paths to correct mistakes
   - Implement autosave to prevent work loss
   - Use AI to suggest corrections rather than merely highlighting errors

## User Experience Guidelines

### Editor Design
- Maintain generous spacing between UI elements
- Use a limited, consistent color palette with high contrast
- Implement progressive disclosure for advanced features
- Keep primary writing functions visible and secondary functions in menus

### Writing Flow
- Enable quick formatting without leaving the keyboard
- Support Markdown shortcuts for common formatting
- Provide AI suggestions that appear non-intrusively
- Implement a distraction-free mode that hides all UI except the current block

### Feedback Systems
- Provide subtle visual feedback for actions
- Include optional audio confirmation for major actions
- Use animation sparingly and allow it to be disabled
- Implement haptic feedback for mobile users

## Implementation Priorities

1. **MVP Feature Set**
   - Basic editor with custom font selection
   - Background color customization
   - Simple text-to-speech functionality
   - Basic spell-checking with AI assistance

2. **Secondary Feature Set**
   - Advanced typography controls
   - Enhanced TTS with highlighting
   - Advanced AI writing suggestions
   - User accounts and cloud sync

3. **Tertiary Feature Set**
   - Collaboration features
   - Template library
   - Browser extension
   - Mobile applications

## Development Considerations

### Accessibility Testing
- Regular testing with users who have dyslexia
- Automated accessibility testing in CI/CD pipeline
- Conformance to WCAG 2.1 AA standards at minimum
- Performance testing on low-end devices

### AI Integration Best Practices
- Optimize prompts for Google Gemini 2.0 Flash to maintain quality while reducing costs
- Keep AI suggestions contextually relevant
- Configure Gemini parameters for dyslexia-aware text processing
- Implement client-side caching of common AI responses to reduce API calls
- Respect user privacy with transparent data handling
- Allow easy overriding of AI suggestions

### Performance Optimization
- Minimize input latency (target <100ms)
- Optimize for low memory usage
- Implement progressive loading for long documents
- Support offline functionality for core features

## Resources and References

- [British Dyslexia Association Style Guide](https://www.bdadyslexia.org.uk/advice/employers/creating-a-dyslexia-friendly-workplace/dyslexia-friendly-style-guide)
- [W3C Web Accessibility Initiative](https://www.w3.org/WAI/)
- [EditorJS Documentation](https://editorjs.io/getting-started/)
- [Next.js Documentation](https://nextjs.org/docs)
- [OpenDyslexic Font](https://opendyslexic.org/)
