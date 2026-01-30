"use client";

import { cn } from "@workspace/ui/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";

export interface MovieCardProps {
	id: string;
	title: string;
	image: string;
	episodes?: number;
	className?: string;
}

export function MovieCard({
	id,
	title,
	image,
	episodes,
	className,
}: MovieCardProps) {
	return (
		<div
			className={cn(
				"group relative flex flex-col gap-2 cursor-pointer",
				className,
			)}
		>
			<div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-muted">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 16vw"
					unoptimized
				/>
				{/* Hover Overlay with Play Button */}
				<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
						<Play className="ml-1 h-6 w-6 text-white fill-white" />
					</div>
				</div>

				{/* Episodes Badge */}
				{episodes && (
					<div className="absolute top-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-md">
						{episodes} EP
					</div>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<h3 className="line-clamp-2 text-sm font-medium leading-tight text-white/90 group-hover:text-white">
					{title}
				</h3>
			</div>
		</div>
	);
}
