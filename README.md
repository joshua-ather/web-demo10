# React Login App with JWT & GraphQL

This is a simple React.js web application that demonstrates how to create a secure login using JWT (JSON Web Token), and fetch data from a GraphQL API.

[🌐 Live Demo](https://demo10.icatchu.id)

> 🧪 **Demo Credentials**  
> Username: `admin`  
> Password: `admin123`

## 🔧 Features

- 🔐 Secure login with JWT authentication
- 📡 Fetch data using REST APIs & GraphQL
- 🧭 Client-side routing with `react-router-dom`
- 💅 Stylish UI using Ant Design
- ⚡ Fast development with Vite + TypeScript
- 🧠 State/data management with Apollo Client and React Query

## 🚀 Tech Stack

| Category      | Library                                                              |
| ------------- | -------------------------------------------------------------------- |
| Frontend      | [React 19](https://react.dev/)                                       |
| Build Tool    | [Vite](https://vite.dev/)                                            |
| Language      | TypeScript                                                           |
| UI Components | [Ant Design](https://ant.design/)                                    |
| Data Fetching | [Apollo Client](https://www.apollographql.com/docs/react/) (GraphQL) |
| HTTP Client   | [Axios](https://axios-http.com/)                                     |
| Routing       | React Router DOM                                                     |
| Linting       | ESLint                                                               |

## 📂 Project Structure (simplified)

```
src/
├── apis/ # REST and GraphQL API calls
├── auth/ # Authentication logic and route protection (middleware)
├── components/ # Reusable UI components
├── layouts/ # Page layouts
├── pages/ # Pages (Login, Dashboard, etc.)
├── App.tsx # Root component
└── main.tsx # App entry point
```

## 🔐 Authentication

- This app uses JWT-based authentication:
- User logs in with credentials (e.g., email & password)
- The backend returns a signed JWT token
- Token is stored securely (e.g., in HTTP-only cookie)
- Token is attached to GraphQL headers for secure requests

## ✍️ Author

Made with ❤️ by Jo
[LinkedIn](https://www.linkedin.com/in/joshua-ather)
