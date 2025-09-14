import OpeningModal from '@/components/popout/OpeningModal';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
	const [first, setfirst] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setfirst(true);
		}, 5000);
		require('bootstrap/dist/js/bootstrap.bundle.min.js');
	}, []);
	return (
		<>
			<OpeningModal
				isOpen={first}
				onClose={() => setfirst(false)}
			/>
			<Component {...pageProps} />
		</>
	);
}
