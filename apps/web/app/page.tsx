import { BannerCarousel } from "@/components/BannerCarousel";
import { MovieSection } from "@/components/MovieSection";

const BANNER_ITEMS = [
	{
		id: "1",
		image:
			"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
		title: "The Last Empress",
	},
	{
		id: "2",
		image:
			"https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
		title: "Midnight Romance",
	},
	{
		id: "3",
		image:
			"https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=2070&auto=format&fit=crop",
		title: "Urban Legend",
	},
];

const TRENDING_ITEMS = [
	{
		id: "t1",
		title: "The CEO's Secret Baby",
		image:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
		episodes: 58,
	},
	{
		id: "t1-2",
		title: "The CEO's Secret Baby",
		image:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
		episodes: 58,
	},
	{
		id: "t2",
		title: "Married to the Mafia King",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
		episodes: 45,
	},
	{
		id: "t1-3",
		title: "The CEO's Secret Baby",
		image:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
		episodes: 58,
	},
	{
		id: "t2-2",
		title: "Married to the Mafia King",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
		episodes: 45,
	},
	{
		id: "t1-4",
		title: "The CEO's Secret Baby",
		image:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
		episodes: 58,
	},
	{
		id: "t2-3",
		title: "Married to the Mafia King",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
		episodes: 45,
	},
	{
		id: "t3",
		title: "My Billionaire Husband",
		image:
			"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop",
		episodes: 60,
	},
	{
		id: "t4",
		title: "Love in the Shadows",
		image:
			"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop",
		episodes: 32,
	},
	{
		id: "t5",
		title: "Revenge of the Ex-Wife",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
		episodes: 72,
	},
	{
		id: "t6",
		title: "Fated to Love You",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop",
		episodes: 40,
	},
];

const NEW_RELEASES = [
	{
		id: "n1",
		title: "Destiny's Call",
		image:
			"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
		episodes: 24,
	},
	{
		id: "n2",
		title: "The Vampire's Bride",
		image:
			"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1680&auto=format&fit=crop",
		episodes: 50,
	},
	{
		id: "n23",
		title: "Alpha's Rejected Mate",
		image:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
		episodes: 65,
	},
	{
		id: "n211",
		title: "The Vampire's Bride",
		image:
			"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1680&auto=format&fit=crop",
		episodes: 50,
	},
	{
		id: "n311",
		title: "Alpha's Rejected Mate",
		image:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
		episodes: 65,
	},
	{
		id: "n21",
		title: "The Vampire's Bride",
		image:
			"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1680&auto=format&fit=crop",
		episodes: 50,
	},
	{
		id: "n31",
		title: "Alpha's Rejected Mate",
		image:
			"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
		episodes: 65,
	},
	{
		id: "n41",
		title: "Undercover Heiress",
		image:
			"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop",
		episodes: 48,
	},
	{
		id: "n51",
		title: "Contract Marriage",
		image:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
		episodes: 30,
	},
];

export default function Home() {
	return (
		<div className="flex flex-col gap-8 pb-8 -mt-14 relative">
			<BannerCarousel items={BANNER_ITEMS} />

			<div className="flex flex-col pb-12">
				<MovieSection title="Trending Now" items={TRENDING_ITEMS} />
				<MovieSection title="New Releases" items={NEW_RELEASES} />
				<MovieSection title="Editors' Choice" items={TRENDING_ITEMS} />
			</div>
		</div>
	);
}
