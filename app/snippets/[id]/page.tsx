import SnippetDetails from "@/app/components/SnippetDetails";
import { getSnippetById } from "@/lib/actions";
import { Snippit } from "@prisma/client";

interface Props {
	params: {
		id: string;
	};
}
const SnippetDetailPage = async ({ params }: Props) => {
	const { id } = await params;
	const { data: snippet } = await getSnippetById(id);
	return <SnippetDetails snippet={snippet as Snippit} />;
};

export default SnippetDetailPage;
