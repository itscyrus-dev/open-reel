"use client";

import { Container } from "@/components/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BannerCarouselProps {
	items: {
		id: string;
		image: string;
		title: string;
	}[];
}

export function BannerCarousel({ items }: BannerCarouselProps) {
	const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
	const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

	return (
		<div className="relative w-full group">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={{
					prevEl,
					nextEl,
				}}
				pagination={{
					el: ".swiper-pagination-custom",
					clickable: true,
					renderBullet: function (index, className) {
						return `<span class="${className} transition-all duration-300"></span>`;
					},
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				className="w-full h-[450px] md:h-[550px] lg:h-[650px]"
			>
				{items.map((item) => (
					<SwiperSlide key={item.id} className="relative w-full h-full">
						<div className="relative w-full h-full">
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover"
								priority
								unoptimized
							/>
							{/* Gradient Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
							{/* Radial Gradient Overlay for Vignette effect */}
							<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0q)_100%)] z-10 pointer-events-none" />

							{/* Content Container - Aligned with Header */}
							<div className="absolute inset-0 flex items-end pb-20">
								<Container>
									<div className="text-white max-w-xl z-20">
										<h2 className="text-3xl md:text-5xl font-bold mb-4">
											{item.title}
										</h2>
									</div>
								</Container>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Controls Container - Aligned with Header */}
			<div className="absolute inset-0 z-20 pointer-events-none">
				<Container className="h-full relative">
					<div className="w-full h-full relative">
						{/* Custom Navigation Arrows */}
						<button
							ref={setPrevEl}
							className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white bg-white/10 hover:bg-white/30 rounded-full transition-all opacity-0 group-hover:opacity-100 duration-300 backdrop-blur-sm pointer-events-auto"
						>
							<ChevronLeft size={32} className="text-white stroke-[3px]" />
						</button>
						<button
							ref={setNextEl}
							className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white bg-white/10 hover:bg-white/30 rounded-full transition-all opacity-0 group-hover:opacity-100 duration-300 backdrop-blur-sm pointer-events-auto"
						>
							<ChevronRight size={32} className="text-white stroke-[3px]" />
						</button>

						{/* Custom Pagination Container */}
						<div className="absolute bottom-5 right-25 flex justify-end pointer-events-auto">
							<div className="swiper-pagination-custom flex gap-2 items-center"></div>
						</div>
					</div>
				</Container>
			</div>

			{/* Styles for custom bullets */}
			<style jsx global>{`
				.swiper-pagination-custom .swiper-pagination-bullet {
					width: 10px;
					height: 10px;
					background-color: rgba(255, 255, 255);
					border-radius: 50%;
					cursor: pointer;
					transition: all 0.3s ease;
					display: block;
				}
				.swiper-pagination-custom .swiper-pagination-bullet-active {
					width: 15px;
					height: 5px;
					border-radius: 5px;
					background-color: #fff;
					box-shadow: 0 0 4px rgba(255, 255, 255);
				}
			`}</style>
		</div>
	);
}
