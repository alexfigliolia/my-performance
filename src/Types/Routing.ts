import type { createBrowserRouter, To } from "react-router-dom";

export type Router = ReturnType<typeof createBrowserRouter>;

export type Navigator = (to: To) => Promise<void>;

export type Formatter = (value: number) => string;
