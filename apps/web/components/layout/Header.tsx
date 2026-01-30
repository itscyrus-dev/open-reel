"use client";

import { Container } from "@/components/Container";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@workspace/ui/components/avatar";
import { cn } from "@workspace/ui/lib/utils";
import { Clock4, Globe, Search, Smartphone } from "lucide-react";
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
					<nav className="flex items-center font-medium text-white space-x-5">
						<span className="flex flex-col items-center transition-colors cursor-pointer hover:text-red-500">
							<Search className="h-5 w-5" />
							Search
						</span>
						<span className="flex flex-col items-center transition-colors  cursor-pointer hover:text-red-500">
							<Smartphone className="h-5 w-5" />
							Download
						</span>
						<span className="flex flex-col items-center transition-colors  cursor-pointer hover:text-red-500">
							<Clock4 className="h-5 w-5" />
							History
						</span>
						<span className="flex item-center gap-1 transition-colors  cursor-pointer hover:text-red-500">
							<Globe className="h-5 w-5" />
							English
						</span>
						<span>
							<Avatar>
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</span>
					</nav>
				</div>
			</Container>
		</header>
	);
}
