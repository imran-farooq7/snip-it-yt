import { ClerkProvider } from "@clerk/nextjs";
import { experimental__simple } from "@clerk/themes";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import TechBar from "./components/TechBar";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
	weight: ["300", "500", "600", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Snip it",
	description: "Place All Your Code Snippets At One Place",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} max-w-7xl mx-auto antialiased`}>
				<ClerkProvider
					appearance={{
						baseTheme: experimental__simple,
						elements: {
							formButtonPrimary:
								"bg-emerald-500 border-none py-4 text-white hover:bg-emerald-700",
							buttonArrowIcon: "opacity-0",
						},
					}}
				>
					<Navbar />
					<TechBar />

					{children}
					<Toaster />
				</ClerkProvider>
			</body>
		</html>
	);
}
