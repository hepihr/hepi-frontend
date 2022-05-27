import '../styles/globals.css';

import {MantineProvider} from '@mantine/core';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<MantineProvider>
				<Component {...pageProps} />
			</MantineProvider>
		</>
	);
};

export default MyApp;
