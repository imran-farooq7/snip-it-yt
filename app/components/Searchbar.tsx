"use client";
import { useRouter } from "next/navigation";
import Input from "./Input";
import { useState } from "react";
import SnippetList from "./SnippetList";
import { Snippit } from "@prisma/client";

const SearchBar = ({ snippets }: { snippets: Snippit[] }) => {
	const [search, setSearch] = useState("");
	const router = useRouter();
	const filteredSnippets = snippets.filter(
		(snippet) =>
			snippet.content.toLowerCase().includes(search) ||
			snippet.title.toLowerCase().includes(search) ||
			snippet.language.toLowerCase().includes(search) ||
			snippet.technology.toLowerCase().includes(search)
	);
	return (
		<>
			<div className="bg-emerald-500 gap-4 mt-5 flex py-4 px-8 rounded-lg mx-auto">
				<Input search={search} setSearch={setSearch} />
				<button
					onClick={() => router.push("/snippets/create")}
					className="bg-black border-0 text-white px-4 py-2 rounded-md"
				>
					Create
				</button>
			</div>
			<SnippetList snippets={filteredSnippets} />
		</>
	);
};

export default SearchBar;
