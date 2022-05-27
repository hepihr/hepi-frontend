import { Button, Container } from '@mantine/core';
import { NextPage } from 'next';
import React from 'react';

const Home: NextPage = (): JSX.Element => {
	return (
		<>
			<Container>
				<Button variant='default' color={'blue'}>
					Hello
				</Button>
			</Container>
		</>
	);
};

export default Home;
