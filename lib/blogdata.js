
export const BLOG_POSTS = [
  {
    id: "designing-with-constraints",
    title: "Designing with constraints, not despite them",
    date: "2026-05-14",
    excerpt:
      "Why the best interfaces I've shipped came from tight technical limits, not creative freedom.",
    content:
      "Every project I'm proud of had a hard constraint attached — a slow API, a tiny team, a device I couldn't control. Constraints force you to decide what actually matters, and that decision is most of what good design is. This post walks through three projects and the specific limit that shaped each one, and the shortcuts I was glad I didn't take.",
  },
  {
    id: "state-management-2026",
    title: "State management in 2026: less is more",
    date: "2026-03-02",
    excerpt:
      "A look at how server components changed what client state means.",
    content:
      "A few years ago, every project seemed to need a global store. Today, many applications work well with a handful of useState calls, server-side data fetching, and carefully managed shared state. This post explores when local state is enough, when Context API helps, and when a dedicated state management library is worth the added complexity.",
  },
  {
    id: "reviewing-your-own-code",
    title: "How I review my own code before anyone else does",
    date: "2026-01-20",
    excerpt:
      "A practical checklist I use before opening a pull request.",
    content:
      "Self-review is a skill, not a formality. Before opening a pull request, I read the diff from top to bottom, check error and empty states, verify edge cases, and look for unclear variable names. I also review security-sensitive logic, remove debugging code, and make sure the changes are focused. A few minutes of deliberate review can prevent hours of debugging later.",
  },
  {
    id: "react-router-architecture",
    title: "React Router architecture: BrowserRouter vs createBrowserRouter",
    date: "2026-10-21",
    excerpt:
      "Understanding declarative routing, route objects, loaders, actions, and choosing the right routing architecture.",
    content:
      "React Router provides different ways to define navigation in a React application. BrowserRouter is commonly used with declarative Routes and Route components, while createBrowserRouter creates a data router that supports features such as route loaders, actions, error boundaries, and nested layouts. This post compares both approaches, explains how route configuration affects application architecture, and shows when each option makes sense. The goal is not to choose the more complex solution by default, but to build routing that remains maintainable as an application grows.",
  },
  {
    id: "nodejs-import-vs-require",
    title: "ES Modules vs CommonJS in Node.js",
    date: "2026-10-21",
    excerpt:
      "A practical comparison of import/export and require/module.exports in modern Node.js applications.",
    content:
      "Node.js supports two major module systems: ECMAScript Modules (ESM) and CommonJS (CJS). ESM uses import and export, while CommonJS uses require and module.exports. Although both help organize code into reusable modules, they differ in syntax, loading behavior, interoperability, and configuration. This post explains how package.json settings such as type: module affect module interpretation, how to handle file extensions, and how to choose a consistent approach for a backend project.",
  },
  {
    id: "css-vs-tailwind",
    title: "CSS vs Tailwind CSS: choosing the right styling approach",
    date: "2026-10-21",
    excerpt:
      "Comparing traditional CSS and utility-first styling through maintainability, flexibility, and developer experience.",
    content:
      "Traditional CSS gives developers direct control over selectors, stylesheets, and reusable class names. Tailwind CSS takes a utility-first approach, allowing developers to compose designs using predefined utility classes directly in their markup. This post compares both approaches in terms of readability, responsive design, customization, consistency, and long-term maintenance. It also explores when plain CSS, CSS Modules, or Tailwind CSS is the better fit, emphasizing that good component boundaries and a consistent design system matter more than the styling tool itself.",
  },
  {
    id: "protected-routes-react",
    title: "Protected routes in React: securing access to pages",
    date: "2026-10-21",
    excerpt:
      "How to restrict frontend navigation based on authentication, user roles, and application state.",
    content:
      "Protected routes help control which pages a user can access in a React application. For example, a dashboard may require authentication, while an admin page may require a specific role. This post explains how to build reusable route guards, handle loading states while authentication is being checked, redirect unauthenticated users, and preserve their intended destination. It also covers an important security principle: frontend route protection improves user experience, but the backend must independently authenticate requests and authorize access to protected resources.",
  },
  {
    id: "prop-drilling-vs-context-api",
    title: "Prop drilling vs Context API in React",
    date: "2026-10-21",
    excerpt:
      "Understanding component communication and deciding when shared state belongs in Context.",
    content:
      "Prop drilling happens when data is passed through multiple intermediate components even though only a deeply nested component needs it. React Context provides another way to share values such as authentication information, theme preferences, or language settings across a component tree. This post compares both approaches, demonstrates how Context can simplify component composition, and discusses its trade-offs, including provider design and unnecessary re-renders. The key lesson is to use props for straightforward parent-to-child communication and introduce Context when shared data genuinely needs a broader scope.",
  },
  {
    id: "bcrypt-vs-node-crypto",
    title: "bcrypt vs Node.js crypto: understanding password security",
    date: "2026-10-21",
    excerpt:
      "Choosing the right cryptographic tools for password hashing, token generation, and security-sensitive operations.",
    content:
      "bcrypt and Node.js crypto solve different security problems. bcrypt is a password-hashing algorithm designed to make password verification computationally expensive, while the crypto module provides primitives for tasks such as secure random-byte generation, hashing, HMACs, and authenticated encryption. This post explains why ordinary fast hashes such as SHA-256 should not be used alone for password storage, how bcrypt salts and work factors help resist brute-force attacks, and when crypto.randomBytes is appropriate for generating secure tokens. It also introduces modern password-hashing alternatives such as Argon2id.",
  },
  {
    id: "seed-data-in-development",
    title: "Seed data: building realistic development environments",
    date: "2026-10-21",
    excerpt:
      "How database seed scripts make development, testing, and onboarding more predictable.",
    content:
      "Seed data is predefined data inserted into a database to create a useful starting state. It can include demo users, products, departments, roles, or sample records needed to test application workflows. This post explores how to design repeatable seed scripts, generate realistic test scenarios, and keep development environments consistent across a team. It also covers idempotency, separating development fixtures from production data, and avoiding hardcoded real credentials or sensitive information. A reliable seeding strategy makes debugging easier and helps developers reproduce problems without manually rebuilding the database.",
  },
  {
    id: "axios-vs-fetch",
    title: "Axios vs Fetch: making HTTP requests in JavaScript",
    date: "2026-10-21",
    excerpt:
      "Comparing browser-native Fetch and Axios for API integration, error handling, and authentication workflows.",
    content:
      "Fetch is a native web API for making HTTP requests, while Axios is a third-party HTTP client with features such as interceptors, configurable defaults, and automatic JSON response transformation. One important difference is that Fetch does not reject its promise for HTTP error statuses such as 404 or 500, so developers must inspect response.ok. Axios rejects by default for unsuccessful HTTP statuses. This post compares request configuration, timeouts, cancellation, credentials, error handling, and token refresh workflows. It also explains how to choose a client based on application requirements rather than assuming one is always better.",
  },
  {
    id: "express-validator-input-validation",
    title: "Express Validator: validating API input properly",
    date: "2026-10-21",
    excerpt:
      "Building safer Express APIs with reusable validation chains and structured error responses.",
    content:
      "API input validation ensures incoming request data meets the application's expected format and business rules before it reaches application logic. Express Validator provides middleware and validation chains for checking request bodies, query parameters, route parameters, and other input sources. This post demonstrates rules for required fields, email addresses, passwords, and custom conditions, along with validationResult for collecting errors. It also explains the difference between validation and sanitization, why client-side validation is insufficient, and why validated data should be handled deliberately instead of trusting raw request input.",
  },
  {
    id: "express-rate-limiting",
    title: "Express rate limiting: protecting APIs from abuse",
    date: "2026-10-21",
    excerpt:
      "Using request limits to reduce brute-force attempts, automated abuse, and unnecessary server load.",
    content:
      "Rate limiting restricts how many requests a client can make within a defined time window. In Express applications, express-rate-limit can help protect login, registration, password-reset, and OTP endpoints from repeated automated attempts. This post explains how to configure request windows, maximum requests, standardized rate-limit headers, and appropriate error responses. It also discusses why different endpoints need different limits, why IP-based limits can be imperfect, and when a shared store such as Redis is necessary for multiple backend instances. Rate limiting is one layer of defense and should complement authentication, monitoring, and other security controls.",
  },
  {
    id: "cors-in-express",
    title: "CORS explained: connecting frontend and backend safely",
    date: "2026-10-21",
    excerpt:
      "Understanding browser cross-origin restrictions, preflight requests, credentials, and Express configuration.",
    content:
      "Cross-Origin Resource Sharing (CORS) is a browser security mechanism that controls whether frontend JavaScript can access responses from a different origin. An origin is defined by its scheme, hostname, and port, so a frontend running on localhost:5173 and an API running on localhost:3000 are different origins. This post explains Access-Control-Allow-Origin, preflight OPTIONS requests, allowed methods and headers, and credentialed requests using cookies. It also covers common deployment errors and why allowing credentials requires a specific permitted origin rather than a wildcard. CORS is not a replacement for authentication or backend authorization.",
  },
  {
    id: "access-tokens-vs-refresh-tokens",
    title: "Access tokens vs refresh tokens: designing authentication",
    date: "2026-10-21",
    excerpt:
      "How short-lived access tokens and longer-lived refresh tokens work together in a secure authentication system.",
    content:
      "Access tokens authorize requests to protected resources and are typically short-lived. Refresh tokens allow a client to obtain a new access token without requiring the user to sign in again. This post walks through the authentication lifecycle, token expiration, refresh endpoints, rotation, revocation, and logout behavior. It also discusses the trade-offs between storing tokens in memory and using secure, HttpOnly cookies, including CSRF considerations when cookies are used. A robust design validates tokens on the server, restricts refresh-token reuse, and avoids treating possession of a frontend route as proof of authorization.",
  },
  {
    id: "react-auth-context",
    title: "Managing authentication state with React Context",
    date: "2026-10-21",
    excerpt:
      "Building an AuthContext to share user information, login state, logout behavior, and session initialization.",
    content:
      "Authentication state often needs to be available across navigation bars, dashboards, profile pages, and protected routes. An AuthContext can centralize the current user, authentication status, login and logout actions, and session initialization logic. This post explains how to create an AuthProvider, expose a useAuth hook, represent loading and unauthenticated states, and restore a session by checking with the backend when the application starts. It also covers avoiding duplicated API calls, handling expired sessions, and keeping authentication concerns separate from authorization. Context organizes frontend state; the backend remains responsible for verifying credentials and enforcing access rules.",
  },
];
