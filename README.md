# GiveFreely Challenge

## Setup Instructions

1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm dev`
4. The app should be up and running at `http://localhost:3000`

## Stack

- [Next.js](https://nextjs.org/): React framework for building server-rendered applications.
- [pnpm](https://pnpm.io/): Fast, disk space efficient package manager.
- [TypeScript](https://www.typescriptlang.org/): Typed JavaScript at Any Scale.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
- [ESLint](https://eslint.org/): Pluggable JavaScript linter.
- [shadcn/ui](https://ui.shadcn.com/): UI components.
- [react-query](https://react-query.tanstack.com/): Data fetching library for React.
- [react-hook-form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.

## Design and Architectural Choices

### Design Choices

- **shadcn/ui**: I used the `shadcn/ui` library to build the UI components. This library provides a set of reusable components that are easy to use and customize. It also provides a consistent look and feel across the app.
- **react-query**: I used `react-query` for data fetching. It provides a powerful and flexible way to manage data fetching and caching in React applications.
- **react-hook-form**: I used `react-hook-form` for form handling. It provides a performant and flexible way to handle forms in React applications.

### Architectural Choices

- **Component-based Architecture**: I used a component-based architecture to organize the code. Each component is a self-contained unit that encapsulates its logic and presentation. This makes the code easier to understand and maintain.

### Folder Structure

The app has the following structure:

```
repo
 ├── public (static assets)
 ├── src
 │   ├── __tests__ (tests)
 │   ├── app (Next.js app)
 │   ├── components (app-specific components)
 │   ├── lib (app-specific utilities)
 │   ├── types (TypeScript types)
 └── ...

```

## Troubleshooting

At times, you might run into issues while setting up the project. Here are some common issues and their solutions:

1. **pnpm not found**: If you get an error saying `pnpm: command not found`, you can install `pnpm` globally by running `npm install -g pnpm`.

2. **Dependencies not installed**: If you get an error saying `dependencies not installed`, you can run `pnpm install` to install the dependencies.

3. **Port already in use**: If you get an error saying `port already in use`, you can change the port by setting the `PORT` environment variable. For example, you can run `PORT=4000 pnpm dev` to run the app on port `4000`.
