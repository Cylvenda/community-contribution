# Community Contribution Platform

A modern web application built with React, TypeScript, and Vite for managing community contributions and engagement.

## 🚀 Features

- **Modern Stack**: Built with React 18, TypeScript, and Vite
- **Beautiful UI**: Styled with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode**: Built-in theme support with dark/light mode
- **Form Handling**: Robust form validation and submission with React Hook Form
- **Notifications**: Toast notifications for user feedback

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: React Toastify

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Cylvenda/community-contribution.git
   cd community-contribution
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # React context providers
├── routes/        # Application routes
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── App.tsx        # Main application component
```

## 🚀 Available Scripts

- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build locally
- `lint`: Run ESLint
- `test`: Run tests (if configured)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Radix UI](https://www.radix-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)
2. Run `npm install` or `yarn` to install dependencies
3. Run `npm run dev` or `yarn dev` to start the development server

## Scripts

- `dev`: Start the development server
- `build`: Build the project for production
- `lint`: Run ESLint to check for code quality
- `preview`: Preview the production build

## Dependencies

The project uses several Radix UI packages for UI components and React Toastify for notifications.

## File Structure

- `src/`: Source code
- `src/components/`: React components
- `src/context/`: Context providers (e.g., theme)
- `src/routes/`: Application routes
- `src/components/Forms/`: Form components

## Usage

The app is wrapped in a `ThemeProvider` with the default theme set to dark. Routing is handled by `AppRoutes`, and toast notifications are managed by `ToastContainer`.

## ESLint Configuration

The project includes ESLint configuration with recommended rules for TypeScript and React.

## License

This project is open source and available under the MIT License.