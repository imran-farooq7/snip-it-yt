import { SnippetData } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";

const TechLink = ({ snippetData }: { snippetData: SnippetData }) => {
	return (
		<Link
			href={`/snippets/technology/${snippetData.technology}`}
			className="hover:scale-105 flex justify-center font-semibold items-center gap-2 min-w-36 text-center transition-all ease-in-out bg-emerald-500 px-4 py-2 rounded-xl"
		>
			<Image src={snippetData.src} width={20} height={30} alt="icon" />
			{snippetData.label}
		</Link>
	);
};

export default TechLink;
