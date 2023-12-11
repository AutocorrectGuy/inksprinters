import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import HeroBannerSvg from "./Hero-animated-v1.svg";
import ExcelToText from "./ExcelToText/ExcelToText";
import CustomToastContainer from "@/Components/Toast/CustomToastContainer";


export default function Welcome({
	auth,
	laravelVersion,
	phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
	return (
		<>
			<Head title="Welcome" />

			<div className="relative sm:flex sm:justify-center sm:items-center min-h-screen selection:bg-red-500 selection:text-white bg-gradient-to-b from-slate-950 to bg-gray-900">
				<div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right ">
					{auth.user ? (
						<Link
							href={route("dashboard")}
							className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
						>
							Dashboard
						</Link>
					) : (
						<div className="flex">
							<ExcelToText />
							<Link
								href={route("login")}
								className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
							>
								Log in
							</Link>

							<Link
								href={route("register")}
								className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
							>
								Register
							</Link>
						</div>
					)}
				</div>

				<div className="max-w-7xl mx-auto p-6 lg:p-8">
					<div className="flex justify-center items-center mt-20 mb-8 sm:mb-2">
						<h1 className="text-3xl ml-4 font-bold bg-gradient-to-r to-[#ba3749] from-[#ca5160] px-2 text-gray-200 mr-1 rounded-sm">
							INK
						</h1>
						<h1 className="text-4xl text-gray-300 font-bold">
							Sprinters
						</h1>
					</div>
					<img
						className="rounded-lg"
						src={HeroBannerSvg}
						alt="Hero-banner"
					/>

					<div className="mt-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
							<div className="p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
								<div>
									<div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											className="w-7 h-7 stroke-red-500"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
											/>
										</svg>
									</div>

									<h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
										About
									</h2>

									<p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
										This project serves as a personal
										endeavor to enhance and showcase the authors web
										development proficiencies in&nbsp;
										<a
											className="text-red-500 font-bold"
											href="https://laravel.com/docs/10.x"
										>
											Laravel
										</a>{" "}
										and{" "}
										<a
											className="text-blue-600 font-bold"
											href="https://react.dev/"
										>
											React
										</a>{" "}
										frameworks.
									</p>
								</div>
							</div>

							<a
								href="https://github.com/AutocorrectGuy/inksprinters"
								className="p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"
							>
								<div>
									<div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											className="w-7 h-7 stroke-red-500"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
											/>
										</svg>
									</div>

									<h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
										Repository
									</h2>

									<p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
										Explore the source code and
										documentation to grasp the intricacies
										of inksprinters and its features.
									</p>
								</div>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									className="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
									/>
								</svg>
							</a>
						</div>
					</div>

					<div className="mx-4 mt-8 text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0 text-end ">
						Laravel v{laravelVersion} (PHP v{phpVersion})
					</div>

					<Link
						href={route("welcome-beats")}
						className="w-20 h-20 bg-transparent hover:bg-cyan-600 transition duration-300 delay-1000 cursor-default rounded-lg float-right mt-8"
					></Link>
				</div>
			</div>
			<CustomToastContainer />
		</>
	);
}
