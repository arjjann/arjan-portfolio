import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Arjan Bista | Mechanical Engineering Portfolio', description: 'Mechanical engineering, robotics, CAD design, simulation and intelligent automation by Arjan Bista.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
