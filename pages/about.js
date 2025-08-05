import BreadcrumbBanner from '@/components/BreadCrumbBanner';
import ExpertGuidanceSection from '@/components/ExpertGuidanceSection';
import Navbar from '@/components/Navbar';
import PartnerBanks from '@/components/PartnerBanks';
import SponsorBanner from '@/components/SponsorBanner';
import WhyChooseSection from '@/components/WhyChoose';
import WhyChoose from '@/components/WhyChoose';
import ApplyVisa from '@/components/aboutus/ApplyVisa';
import CountrySection from '@/components/aboutus/CountrySection';
import Team from '@/components/aboutus/Team';
import Footer from '@/components/ui/Footer';
import React from 'react';

const about = () => {
	const whyItems = [
		{
			icon: '/images/icons/chat.png',
			title: 'Direct Interviews',
			desc: 'Where did this incorrect belief that everyone dislikes praising happiness come from?',
		},
		{
			icon: '/images/icons/globe.png',
			title: 'Faster Processing',
			desc: 'Where did this incorrect belief that everyone dislikes praising happiness come from?',
		},
		{
			icon: '/images/icons/hands.png',
			title: 'Visa Assistance',
			desc: 'Where did this incorrect belief that everyone dislikes praising happiness come from?',
		},
		{
			icon: '/images/icons/money.png',
			title: 'Cost-Effective',
			desc: 'Where did this incorrect belief that everyone dislikes praising happiness come from?',
		},
	];
	return (
		<>
			<Navbar />
			<BreadcrumbBanner title='About Us' />

			<ExpertGuidanceSection />
			<div
				className='container position-relative p-4 '
				style={{ backgroundColor: '#032B66', borderRadius: '10px' }}>
				<img
					className='position-absolute top-0 start-0'
					src='/images/globesmall.png'
				/>
				<div className='row p-5'>
					<div className='col-md-3'>
						<img src='/images/icons/plane.png' />
						<h5 className='text-white mt-4'>Visa</h5>
						<p style={{ color: '#fff', fontSize: '13px' }}>
							Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.
						</p>
					</div>
					<div className='col-md-3'>
						<img src='/images/icons/passport.png' />
						<h5 className='text-white mt-4'>Passport</h5>
						<p style={{ color: '#fff', fontSize: '13px' }}>
							Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.
						</p>
					</div>
					<div className='col-md-3'>
						<img src='/images/icons/castle.png' />
						<h5 className='text-white mt-4'>Immigration</h5>
						<p style={{ color: '#fff', fontSize: '13px' }}>
							Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.
						</p>
					</div>
					<div className='col-md-3'>
						<img src='/images/icons/language.png' />
						<h5 className='text-white mt-4'>Translation</h5>
						<p style={{ color: '#fff', fontSize: '13px' }}>
							Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit amet.
						</p>
					</div>
				</div>
			</div>

			<CountrySection />
			<ApplyVisa />
			<div style={{ marginTop: '100px' }}>
				<div className='high-margin'>
					<WhyChooseSection
						label='WHY CHOOSE US'
						title='Offer custom-made services that our customer needs.'
						items={whyItems}
					/>
				</div>
			</div>
			<PartnerBanks />

			<Footer />
		</>
	);
};

export default about;
