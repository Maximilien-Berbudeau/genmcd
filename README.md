# GenMCD - Automatic MCD Generator

> An AI-powered Conceptual Data Model (MCD) generator built with cutting-edge 2025 web technologies.

## 🚀 Features

- **AI-Powered Generation**: Transform text descriptions into visual database models using OpenAI GPT-4 Turbo
- **Interactive Visualization**: Modern Mermaid v11 ER diagrams with zoom, pan, and selection
- **React 19 Modern UI**: Built with the latest React features including `useActionState`
- **Secure API Management**: Web Crypto API for encrypted key storage
- **Freemium Usage System**: Built-in usage tracking and rate limiting
- **Advanced Export**: SVG, PNG, JPEG, and Mermaid code export capabilities
- **Responsive Design**: Mobile-first design with Tailwind CSS v4.0

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Latest React with modern features
- **TypeScript 5.6+** - Type-safe development
- **Vite 6** - Lightning-fast build tool
- **Tailwind CSS v4.0** - Modern utility-first CSS

### State & Data Management
- **Zustand v5** - Lightweight state management
- **TanStack Query v5** - Server state management
- **React Router v7** - Client-side routing

### AI & Visualization
- **OpenAI v4** - AI-powered MCD generation
- **Mermaid v11** - Interactive diagram rendering
- **html-to-image** - Diagram export functionality

### Development Tools
- **ESLint 9** - Code linting with React 19 rules
- **Prettier 3** - Code formatting
- **React DevTools** - Development debugging (install browser extension)

## 📁 Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── forms/          # Form components with React 19 features
│   ├── diagrams/       # Mermaid visualization components
│   └── layout/         # Layout components
├── hooks/              # Custom React hooks
├── stores/             # Zustand state stores
├── services/           # API services and integrations
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── pages/              # Page components for routing
├── context/            # React context providers
└── assets/             # Static assets
\`\`\`

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Maximilien-Berbudeau/genmcd.git
   cd genmcd
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env
   # Edit .env and add your OpenAI API key
   \`\`\`

4. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to \`http://localhost:5173\`

## 🏗️ Development

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build
- \`npm run lint\` - Run ESLint
- \`npm run lint:fix\` - Fix ESLint errors
- \`npm run format\` - Format code with Prettier

### Code Quality

This project uses:
- **ESLint 9** with React 19 specific rules
- **Prettier 3** for consistent code formatting
- **TypeScript strict mode** for type safety

### React DevTools Setup

For optimal debugging experience:

1. **Install React DevTools browser extension:**
   - [Chrome/Edge Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
   - [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

2. **Usage:**
   - Open your browser's developer tools (F12)
   - Navigate to the "⚛️ Components" or "⚛️ Profiler" tabs
   - Inspect React component hierarchy and state
   - Profile React performance in real-time

3. **Features available:**
   - Component tree inspection with React 19 features
   - Props and state viewing/editing
   - Performance profiling
   - Hooks debugging
   - Time-travel debugging

## 📝 Usage

1. **Enter your OpenAI API key** in the settings
2. **Describe your database** in natural language
3. **Generate your MCD** with AI assistance
4. **Interact with the diagram** (zoom, pan, select)
5. **Export in multiple formats** (SVG, PNG, JPEG, Mermaid)

## 🔐 Security

- API keys are encrypted using Web Crypto API
- Secure localStorage implementation
- Input validation and sanitization
- Rate limiting for API requests

## 🎯 Roadmap

- [x] Project setup with React 19 + Vite 6
- [x] ESLint 9 + Prettier 3 configuration
- [x] Tailwind CSS v4.0 integration
- [x] Project structure implementation
- [ ] React Router v7 setup
- [ ] Text brief submission form
- [ ] OpenAI API integration
- [ ] Mermaid visualization
- [ ] API key management
- [ ] Usage tracking system
- [ ] Export functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for the powerful GPT-4 API
- Mermaid.js for excellent diagram rendering
- The React team for React 19 innovations
- Tailwind team for CSS v4.0 improvements

---

Built with ❤️ using the latest 2025 web technologies