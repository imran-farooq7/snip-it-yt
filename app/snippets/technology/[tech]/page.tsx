import SearchBar from "@/app/components/Searchbar";
import SnippetList from "@/app/components/SnippetList";
import { getSnippetsByTech } from "@/lib/actions";
import { Technology } from "@prisma/client";

interface Props {
	params: {
		tech: Technology;
	};
}
const TechnogyPage = async ({ params }: Props) => {
	const { tech } = await params;
	const { data: snippets } = await getSnippetsByTech(tech);
	return <SearchBar snippets={snippets} />;
};

export default TechnogyPage;
