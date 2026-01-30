import { Container } from "@/components/Container";
import { SocialIcons } from "@workspace/ui/components/SocialIcons";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-[#101010] pt-5 pb-5">
			<Container>
				<div className="text-white flex gap-30">
					<div>
						<text className="text-2xl font-extrabold">ABOUT</text>
						<Link href="/" className="mr-6 flex items-center space-x-2 ">
							<span className="text-gray-400 text-lg font-semibold leading-10">
								Terms of Service
							</span>
						</Link>
						<Link href="/" className="mr-6 flex items-center space-x-2">
							<span className="text-gray-400 text-lg font-semibold leading-10">
								Privacy Policy
							</span>
						</Link>
						<Link href="/" className="mr-6 flex items-center space-x-2">
							<span className="text-gray-400 text-lg font-semibold leading-10">
								Contact Us
							</span>
						</Link>
					</div>
					<div>
						<text className="text-2xl font-extrabold">SUPPORT</text>
						<Link href="/" className="mr-6 flex items-center space-x-2">
							<span className="text-gray-400 text-lg font-semibold leading-10">
								Privacy Policy
							</span>
						</Link>
						<Link href="/" className="mr-6 flex items-center space-x-2">
							<span className="text-gray-400 text-lg font-semibold leading-10">
								Contact Us
							</span>
						</Link>
					</div>
					<div>
						<text className="text-2xl font-extrabold leading-10">
							COMMUNITY
						</text>
						<SocialIcons />
					</div>
					<div>
						<text className="text-2xl font-extrabold">Download</text>
					</div>
				</div>
				<p className="text-center text-sm font-medium leading-loose text-muted-foreground">
					All rights reserved. 2026 Crazy Maple Studio Inc.©
				</p>
			</Container>
		</footer>
	);
}
