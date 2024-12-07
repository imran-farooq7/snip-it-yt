import EditSnippetForm from "@/app/components/UpdateSnippetForm";
import { getSnippetById } from "@/lib/actions";
import { Snippit } from "@prisma/client";
interface Props {
	params: Promise<{ id: string }>;
}
const EditSnippetPage = async ({ params }: Props) => {
	const { id } = await params;
	const { data: snippet } = await getSnippetById(id);
	return <EditSnippetForm snippet={snippet as Snippit} />;
};

export default EditSnippetPage;
