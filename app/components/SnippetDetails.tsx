"use client";
import { SNIPPETDATA } from "@/lib/constant";
import { Snippit } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Prism } from "react-syntax-highlighter";
import DialogBox from "./Dialogbox";
import { useState } from "react";
const SnippetDetails = ({ snippet }: { snippet: Snippit }) => {
	const snippetData = SNIPPETDATA[snippet.technology];
	const [open, setOpen] = useState(false);
	return (
		<div className="mt-10">
			<div className="flex mb-10 justify-center space-x-4 items-center">
				<Image src={snippetData.src} alt="icon" className="w-10" />
				<h1 className="text-2xl font-bold">{snippet.title}</h1>
			</div>
			<Prism showLineNumbers language={snippet.language}>
				{snippet.content}
			</Prism>
			<div className="flex gap-4 justify-center mt-10">
				<Link
					href={`/snippets/edit/${snippet.id}`}
					className="bg-emerald-500 w-36 py-3 rounded-xl text-white text-center"
				>
					Edit
				</Link>
				<button
					onClick={() => setOpen(true)}
					className="bg-red-500 w-36 py-3 rounded-xl text-white text-center"
				>
					Delete
				</button>
			</div>
			<DialogBox open={open} setOpen={setOpen} id={snippet.id} />
		</div>
	);
};

export default SnippetDetails;
