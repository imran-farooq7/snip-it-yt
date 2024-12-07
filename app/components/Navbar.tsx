import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 shadow-lg w-full  bg-white border-b backdrop-blur-lg bg-opacity-80">
			<div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
				<div className="relative flex h-16 justify-between">
					<div className="flex flex-1 items-stretch justify-start">
						<Link href={"/"} className="flex flex-shrink-0 items-center">
							<Image
								alt="logo"
								className="block"
								width={48}
								height={48}
								src="https://www.svgrepo.com/show/524460/code.svg"
							/>
						</Link>
					</div>
					<UserButton />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
