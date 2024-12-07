"use client";
import { createSnippet } from "@/lib/actions";
import { SNIPPETDATA } from "@/lib/constant";
import { Technology } from "@prisma/client";
import { error } from "console";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
interface FormFields {
	title: string;
	content: string;
	technology: Technology;
}

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		defaultValues: {
			title: "",
			content: "",
			technology: "bash",
		},
	});
	const router = useRouter();
	const handleFormSubmit = async (data: FormFields) => {
		try {
			const language = SNIPPETDATA[data.technology].language;
			const res = await createSnippet({
				...data,
				language,
			});
			if (res.status === "success") {
				toast.success(res.message);
				router.push("/");
			}
		} catch (error) {
			toast.error("An error occurred while creating snippet");
		}
	};
	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			<div className="space-y-12 mt-12 sm:space-y-16">
				<div>
					<h2 className=" font-semibold text-center leading-7 text-gray-900">
						New Snippet
					</h2>

					<div className="mt-10 space-y-8 pb-12 sm:space-y-0 sm:pb-0">
						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
							<label
								htmlFor="title"
								className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
							>
								Title
							</label>
							<div className="mt-2 sm:col-span-2 sm:mt-0">
								<input
									type="text"
									id="title"
									{...register("title", {
										required: true,
										minLength: {
											value: 5,
											message: "Please enter aleast 5 characters",
										},
									})}
									autoComplete="given-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								/>
							</div>
							{errors.title?.message && (
								<p className="text-red-500">{errors.title.message}</p>
							)}
						</div>

						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
							<label
								htmlFor="language"
								className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
							>
								Technology/Framework/Language
							</label>
							<div className="mt-2 sm:col-span-2 sm:mt-0">
								<select
									id="language"
									{...register("technology", { required: true })}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 px-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									{Object.keys(SNIPPETDATA).map((key) => {
										const { technology, label } = SNIPPETDATA[key];
										return (
											<option value={technology} key={key}>
												{label}
											</option>
										);
									})}
								</select>
							</div>
						</div>
						<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
							<label
								htmlFor="content"
								className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
							>
								Content
							</label>
							<div className="mt-2 sm:col-span-2 sm:mt-0">
								<textarea
									id="content"
									{...register("content", {
										required: true,
										minLength: {
											value: 30,
											message: "Content must be at least 30 characters",
										},
									})}
									rows={3}
									className="block h-40 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
								/>
								{errors.content?.message && (
									<p className="text-red-500">{errors.content.message}</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end">
				<button
					type="submit"
					className="inline-flex w-40 justify-center rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
				>
					Save
				</button>
			</div>
		</form>
	);
};

export default Form;
