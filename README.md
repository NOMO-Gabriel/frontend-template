# Next.js Project Template

Welcome to the Next.js Project Template by Veldra Enterprise! This template provides a basic setup for Next.js applications using Next.js 14 with the App Router. It's designed for frontend applications without a backend.

## 🚀 Getting Started

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Veldra-enterprise/front-end-template.git
   cd front-end-template
   
2. **Install Dependencies**
    ```bash
   npm install
3. **Run the Development Server**
    ```bash
   npm run dev

Open your browser and navigate to `http://localhost:3000` to see your application in action.

## 📂 Project Structure

This template follows a specific project structure:

- **`public/`**: Stores images and documents.
- **`app/`**: Contains the core application logic.
    - **`pages/`**: Handles the Next.js pages using the App Router.
    - **`components/`**: Contains reusable components like Header, Footer, and HomeBody.
    - **`fonts/`**: Custom fonts for the project.
    - **`utils/hooks/`**: Custom hooks for managing theme and internationalization.
    - **`utils/contexts/`**: Context providers for global state management.
## ⚙️ Available Commands

Here are some useful commands to manage and customize your project:

- **Rename the Project**

  You can use the custom command to rename the project:

  ```bash
  npm run rename-project
- **Remove GitHub Remotes**

  ```bash
  git remote remove origin

- **Deploy**
      
    ```bash
         npm run build
         npm start

## 🌍 Internationalization and Theme

This template includes built-in support for internationalization and dynamic theme switching. Here’s how you can use these features in your components:

### Internationalization

To manage and switch between different languages, use the `useLocale` hook. Here’s an example of how to use it in a component:

    ```tsx
    // ExampleComponent.tsx
    import { useLocale } from "@/app/utils/hooks/useLocale.js";
    
    export default function ExampleComponent() {
        const { locale } = useLocale();
    
        return (
            <div>
                {locale === 'en' ? (
                    <p>Welcome to our application!</p>
                ) : (
                    <p>Bienvenue sur notre application !</p>
                )}
            </div>
        );
    }

### Theme Management

To toggle between light and dark themes, use the useTheme hook. Here’s an example of how to apply theme-based styles:    

    ```tsx
    // ExampleComponent.tsx
    import { useTheme } from "@/app/utils/hooks/useTheme.js";
    
    export default function ExampleComponent() {
    const { theme } = useTheme();
    
        const backgroundClass = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800';
        const textClass = theme === 'light' ? 'text-black' : 'text-white';
    
        return (
            <div className={`${backgroundClass} ${textClass}`}>
                <p>Hello, this is a themed component!</p>
            </div>
        );
    }

### 📝 Example Page

For more information on the project structure and customization options, check out the `/examplePage`.

### 💬 Feedback and Support

If you have any questions or need support, feel free to open an issue on GitHub or contact us at [support@veldraenterprise.com](mailto:enterpriseveldra@gmail.com).

### 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

