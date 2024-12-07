"use client";
import { deleteSnippetById } from "@/lib/actions";
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
interface Props {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	id: number;
}
export default function DialogBox({ id, open, setOpen }: Props) {
	const router = useRouter();
	const handleDeleteSnippet = async (id: number) => {
		try {
			const res = await deleteSnippetById(id);
			if (res?.status === "success") {
				toast.success(res.message);
				router.push("/");
			} else {
				toast.error(res?.message!);
			}
		} catch (error) {}
	};
	return (
		<Transition show={open}>
			<Dialog className="relative z-10" onClose={setOpen}>
				<TransitionChild
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</TransitionChild>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<TransitionChild
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
								<div>
									<div className="mt-3 text-center sm:mt-5">
										<DialogTitle
											as="h3"
											className="text-2xl font-semibold leading-6 text-gray-900"
										>
											Delete Snippet
										</DialogTitle>
										<div className="mt-2">
											<p className="text-sm text-gray-500">
												Are you sure you want to delete this snippet?
											</p>
										</div>
									</div>
								</div>
								<div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
									<button
										type="button"
										onClick={() => handleDeleteSnippet(id)}
										className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
									>
										Delete
									</button>
									<button
										type="button"
										className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
										data-autofocus
										onClick={() => setOpen(false)}
									>
										Cancel
									</button>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
