import Head from "next/head";
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type ChildrenProps = {
	children: ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
	return (
		<>
			<Head>
				<title>Real Estate - Nextjs</title>
				<meta
					name="description"
					content="show rentable or buyable properties on the market"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box maxWidth="1280px" m="auto">
				<header>
					<Navbar />
				</header>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</Box>
		</>
	);
};

export default Layout;
