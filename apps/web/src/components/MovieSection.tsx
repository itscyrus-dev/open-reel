"use client";

import { Container } from "@/components/ui/container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieCard, type MovieCardProps } from "./MovieCard";

import "swiper/css";
import "swiper/css/navigation";

interface MovieSectionProps {
	title: string;
	items: MovieCardProps[];
}

export function MovieSection({ title, items }: MovieSectionProps) {
	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

	return (
		<section className="py-6 space-y-4">
			<Container>
				<h2 className="text-xl font-bold text-white mb-4">{title}</h2>
				<div className="relative group">
					<Swiper
						modules={[Navigation]}
						navigation={{
							prevEl,
							nextEl,
						}}
						spaceBetween={16}
						slidesPerView={2.5}
						slidesPerGroup={2}
						breakpoints={{
							640: {
								slidesPerView: 3.5,
								slidesPerGroup: 3,
								spaceBetween: 16,
							},
							768: {
								slidesPerView: 4.5,
								slidesPerGroup: 4,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 5.5,
								slidesPerGroup: 5,
								spaceBetween: 20,
							},
							1280: {
								slidesPerView: 7,
								slidesPerGroup: 7,
								spaceBetween: 20,
							},
						}}
						className="w-full"
					>
						{items.map((item) => (
							<SwiperSlide key={item.id}>
								<MovieCard {...item} />
							</SwiperSlide>
						))}
					</Swiper>

					{/* Navigation Arrows */}
					<button
						ref={setPrevEl}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/30 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
					>
						<ChevronLeft className="w-8 h-8" />
					</button>
					<button
						ref={setNextEl}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/30 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
					>
						<ChevronRight className="w-8 h-8" />
					</button>
				</div>
			</Container>
		</section>
	);
}
