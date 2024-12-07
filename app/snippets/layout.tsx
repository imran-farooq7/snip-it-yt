import React from "react";
import TechBar from "../components/TechBar";

const SnippetsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<TechBar />
			{children}
		</>
	);
};

export default SnippetsLayout;
