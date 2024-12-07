import { SNIPPETDATA } from "@/lib/constant";
import TechLink from "./TechLink";

const TechBar = () => {
	return (
		<div className="mt-20 flex text-white gap-5 justify-center flex-wrap">
			{Object.values(SNIPPETDATA).map((snippet) => (
				<TechLink snippetData={snippet} key={snippet.technology} />
			))}
		</div>
	);
};

export default TechBar;
