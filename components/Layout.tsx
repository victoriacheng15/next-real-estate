import Head from "next/head";
import { ReactNode } from "react";
import { Box, layout } from "@chakra-ui/react";

type ChildrenProps = {
	children: ReactNode
}

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
					<h1>navbar</h1>
				</header>
				<main>{children}</main>
				<footer>
					<h1>footer</h1>
				</footer>
			</Box>
		</>
	);
};

export default Layout;