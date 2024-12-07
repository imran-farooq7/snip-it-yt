import { Dispatch, SetStateAction } from "react";

interface Props {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
}
export default function Input({ search, setSearch }: Props) {
	return (
		<input
			type="text"
			name="company-website"
			id="company-website"
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			className="min-w-0 w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:outline-none  sm:text-sm sm:leading-6"
			placeholder="Search snippet"
		/>
	);
}
