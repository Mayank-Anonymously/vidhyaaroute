import Head from 'next/head';
import Navbar from '@/components/Navbar';
import VisaCategoriesSection from '@/components/VisaCategoriesSection';
import HomeBanner from '@/components/HomeBanner';
import ExpertGuidanceSection from '@/components/ExpertGuidanceSection';
import Timeline from '@/components/Timeline';
import Footer from '@/components/ui/Footer';
import CountryGrid from '@/components/CountryGrid';
import PartnerBanks from '@/components/PartnerBanks';
import WhyChooseSection from '@/components/WhyChoose';
import { HOST } from '@/utils/static';
import axios from 'axios';
import RecentlyPosted from '@/components/RecentlyUpdated';

export default function Home({ data, resblogs }) {
	const whyItems = [
		{
			icon: '/images/icons/chat.png',
			title: 'Global Education',
			desc: 'From course selection to visa approval, Vidhyaa Route guides your study abroad journey completely.',
		},
		{
			icon: '/images/icons/globe.png',
			title: 'Worldwide Insight',
			desc: 'We guide admissions to top countries like the UK, USA, Canada, and more.',
		},
		{
			icon: '/images/icons/hands.png',
			title: 'Personal Mentorship',
			desc: 'Vidhyaa Route offers personalized guidance based on goals, academics, and finances.',
		},
		{
			icon: '/images/icons/money.png',
			title: 'Loan Guidance',
			desc: 'We assist students in securing personalized education loans through trusted banks and financial institutions.',
		},
	];
	return (
		<>
			<Head>
				<title>Vidhya Route | Your Bridge to Global Education</title>
				<meta
					name='description'
					content='Vidhya Route | Your Bridge to Global Education'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Navbar />
			<HomeBanner />
			{/* <BreadcrumbBanner/> */}
			<VisaCategoriesSection data={data} />
			<ExpertGuidanceSection />
			<WhyChooseSection
				label='WHY CHOOSE US'
				title='Vidhyaa Route is your trusted partner, guiding you from admission to arrival abroad.'
				items={whyItems}
			/>
			<Timeline />
			<RecentlyPosted blogsData={resblogs} />
			<CountryGrid />
			<PartnerBanks />
			<Footer />
		</>
	);
}

export const getServerSideProps = async () => {
	const res = await axios.get(`${HOST}services/all`);
	const resblogs = await axios.get(`${HOST}blogs/all`);

	return {
		props: {
			data: res.data?.response || null, // safe optional chaining
			resblogs: resblogs.data?.response || null, // safe optional chaining
		},
	};
};
