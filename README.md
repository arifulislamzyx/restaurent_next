**Restaurant Management Application**

A dynamic and user-friendly Restaurant Management System built with Next.js, React, and Tailwind CSS. This application allows restaurants to efficiently manage their daily operations, including menu management, customer orders, and payment processing using Stripe.

**Features**

\* **Dynamic Menu Management:** Implemented a flexible and intuitive menu system that allows restaurant owners to easily manage, update, and categorize items dynamically, improving content scalability and reducing manual efforts.

\* **Customer Ordering System:** Developed a seamless ordering process where customers can browse the menu, customize items, and place orders efficiently, with real-time order updates and a user-friendly interface optimized for performance.

\* **Stripe Integration for Payments:** Integrated a robust Stripe payment gateway to handle secure transactions, enabling a streamlined and secure checkout experience, complete with payment validation, error handling, and customer receipt management.

\* **Mobile-Optimized Responsive Design:** Utilized Tailwind CSS to build a highly responsive, mobile-first UI that ensures seamless user experiences across devices, improving accessibility and user retention.

\* **Advanced User Authentication:** Implemented secure authentication flows with NextAuth.js, allowing for flexible session management, user roles, and protection against unauthorized access.

\*Interactive Feedback with Toast Notifications: Integrated SweetAlert2 for real-time, non-intrusive notifications, delivering immediate feedback for actions like order confirmation, payment success, and error handling.

\* **Fluid and Engaging Animations:** Leveraged Framer Motion to enhance the user experience with smooth, interactive animations, making the application feel more dynamic and responsive, which helps to improve overall engagement and retention.

**Tech Stack**

_**Frontend:**_

- **Next.js:** A powerful React framework enabling server-side rendering (SSR), static site generation (SSG), and optimized API routes, enhancing SEO and performance for dynamic web applications.
- **Tailwind CSS:** A utility-first CSS framework for creating responsive, scalable, and modern designs, offering flexibility and consistency in UI development.
- **Framer Motion:** A leading animation library for React, providing smooth transitions, interactive animations, and visual feedback, improving the overall user experience.
- **Next-Auth:** A powerful authentication solution for secure user login, session management, and third-party provider integrations, streamlining the authentication process for the application.
- **Axios:** A widely-used HTTP client for making API requests, handling asynchronous data fetching, and ensuring consistent communication between the frontend and backend.

_**Backend:**_

- **MongoDB:** NoSQL database for storing product, order, and user information.
- **Stripe:** Payment gateway for processing customer transactions securely.
- **Resend:** Email service for order confirmation and notifications.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
