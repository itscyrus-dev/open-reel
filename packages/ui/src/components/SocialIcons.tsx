import { AiFillTikTok } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaYoutube } from "react-icons/fa";

export function SocialIcons() {
	return (
		<div className="flex gap-5">
			<FaFacebook size={30} color="gray" />
			<FaYoutube size={30} color="gray" />
			<AiFillTikTok size={30} color="gray" />
			<BiLogoInstagramAlt size={30} color="gray" />
		</div>
	);
}
