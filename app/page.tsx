import prisma from "@/prisma/db";
import SearchBar from "./components/Searchbar";
import SnippetList from "./components/SnippetList";
import TechBar from "./components/TechBar";
import { getAllSnippets } from "@/lib/actions";

export default async function Home() {
	const { data: snippets } = await getAllSnippets();
	return (
		<>
			<TechBar />
			<SearchBar snippets={snippets} />
		</>
	);
}
