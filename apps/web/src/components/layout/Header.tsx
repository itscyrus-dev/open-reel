"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 z-50 w-full transition-colors duration-300",
				isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent",
			)}
		>
			<Container className="flex h-15 items-center">
				<div className="mr-4 hidden md:flex">
					<Link href="/" className="mr-6 flex items-center space-x-2">
						<span className="hidden font-bold sm:inline-block text-xl text-white">
							Next Short
						</span>
					</Link>
					<nav className="flex items-center space-x-6 text-lg font-medium">
						<Link href="/browse" className="transition-colors text-red-500">
							Home
						</Link>
						<Link
							href="/trending"
							className="transition-colors text-white hover:text-red-500"
						>
							Categories
						</Link>
						<Link
							href="/trending"
							className="transition-colors  text-white hover:text-red-500"
						>
							Fandom
						</Link>
						<Link
							href="/trending"
							className="transition-colors  text-white hover:text-red-500"
						>
							Brand
						</Link>
					</nav>
				</div>
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						{/* Search placeholder */}
					</div>
					<nav className="flex items-center text-lg font-medium text-white space-x-5">
						<span className="transition-colors  hover:text-red-500">
							Search
						</span>
						<span className="transition-colors  hover:text-red-500">
							Download
						</span>
						<span className="transition-colors  hover:text-red-500">
							History
						</span>
						<span className="transition-colors  hover:text-red-500">
							English
						</span>
						<span>
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</span>
					</nav>
				</div>
			</Container>
		</header>
	);
}
