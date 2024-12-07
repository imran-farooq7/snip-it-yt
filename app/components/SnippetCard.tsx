import { SNIPPETDATA } from "@/lib/constant";
import { Snippit } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const SnippetCard = ({ snippet }: { snippet: Snippit }) => {
	const snippetData = SNIPPETDATA[snippet.technology];
	return (
		<Link
			href={`/snippets/${snippet.id}`}
			className="bg-green-700 flex gap-3 flex-col items-center py-4 shadow-lg rounded-2xl max-w-full"
		>
			<Image
				src={snippetData.src}
				width={96}
				alt={snippetData.technology}
				className="object-contain"
			/>
			<p className="font-semibold text-lg uppercase text-white">
				{snippetData.technology}
			</p>
			<p>{snippet.title}</p>
		</Link>
	);
};

export default SnippetCard;
