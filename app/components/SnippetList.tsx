import { Snippit } from "@prisma/client";
import SnippetCard from "./SnippetCard";
const SnippetList = ({ snippets }: { snippets: Snippit[] }) => {
	return (
		<div className="grid grid-cols-4 p-10 gap-x-6 gap-y-4">
			{snippets.map((snippet) => (
				<SnippetCard snippet={snippet} key={snippet.id} />
			))}
		</div>
	);
};

export default SnippetList;
