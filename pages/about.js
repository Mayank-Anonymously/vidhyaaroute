import BreadcrumbBanner from '@/components/BreadCrumbBanner';
import Navbar from '@/components/Navbar';
import PartnerBanks from '@/components/PartnerBanks';
import WhyChooseSection from '@/components/WhyChoose';
import ApplyVisa from '@/components/aboutus/ApplyVisa';
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
			<div className='container p-5'>
				<h1>About Us</h1>
				<p>
					Vidhyaa Route is a premier consultancy specializing in overseas
					university admissions in the UK, USA, Canada, Ireland, France, and
					many other countries. We provide end-to-end support, including visa
					processing and education loan assistance, ensuring a smooth and
					hassle-free journey for students. With our expertise and personalized
					guidance, we help students achieve their dreams of studying abroad
					with confidence.
				</p>

				<p>
					<br />
					Vidhyaa Route stands out as a trusted partner in your journey to study
					abroad, offering unmatched guidance and support from admission to
					arrival. Here's what makes us the preferred choice for aspiring
					international students:
				</p>
				<p>
					<b> ✅ 1. End-to-End Study Abroad Solutions</b>
					<br />
					From choosing the right course and university to securing your student
					visa, Vidhyaa Route manages every step of the process &mdash; so you
					don&rsquo;t have to navigate it alone.
				</p>
				<p>University Selection &amp; Applications</p>
				<p>SOP &amp; Documentation Guidance</p>
				<p>Offer Letter &amp; Admit Confirmation</p>
				<p>Education Loan Assistance</p>
				<p>Visa Processing &amp; Interview Prep</p>
				<p>Pre-departure Support</p>
				<p>
					<b> 🌐 2. Global Reach, Local Expertise</b>
					<br />
					We specialize in admissions across top destinations including the UK,
					USA, Canada, Ireland, France, and many other countries. Our
					country-specific experts provide localized insights on application
					strategies, visa rules, and post-arrival formalities.
				</p>
				<p>
					<b> 🎯 3. Personalized Guidance for Every Student</b>
					<br />
					At Vidhyaa Route, we don&rsquo;t believe in a one-size-fits-all
					approach. Our consultants work closely with each student to understand
					their academic background, career goals, and financial needs &mdash;
					ensuring tailored advice that maximizes success.
				</p>
				<p>
					<b> 💸 4. Expert Education Loan Assistance</b>
					<br />
					Getting financial support shouldn&rsquo;t be a hurdle. We help
					students connect with:
				</p>
				<p>National and private banks</p>
				<p>NBFCs and international lenders</p>
				<p>Loan documentation and approval processes</p>
				<p>
					Our team ensures your loan aligns with university deadlines and visa
					requirements.
				</p>
				<h>
					<b>🛂 5. Hassle-Free Visa Processing</b>
					<br />
					Navigating visa requirements can be stressful &mdash; but not with us.
					Our dedicated visa experts assist with:
				</h>
				<p>Accurate document preparation</p>
				<p>Visa interview training (for countries like the USA)</p>
				<p>Timely updates and support throughout the process</p>
				<p>
					<b> 🤝 6. Proven Track Record &amp; Student Success</b>
					<br />
					With hundreds of success stories, Vidhyaa Route has helped students
					achieve admissions into top-ranked universities globally. Our
					reputation is built on integrity, results, and student satisfaction.
				</p>
				<p>
					<b> 💬 Your Dream. Our Mission.</b>
					<br />
					Whether you're applying for a Bachelor's, Master's, or PhD program,
					Vidhyaa Route is here to make your global education dream a reality
					&mdash; seamlessly, confidently, and affordably.
				</p>
			</div>

			{/* <ExpertGuidanceSection /> */}
			<div
				className='container position-relative mt-5 p-4'
				style={{ backgroundColor: '#032B66', borderRadius: '10px' }}>
				<img
					className='position-absolute top-0 start-0'
					src='/images/globesmall.png'
					alt='Background Globe'
				/>
				<div className='row p-5'>
					<div className='col-md-3'>
						<img src='/images/icons/plane.png' />
						<h5 className='text-white mt-4'>Overseas Admission</h5>
						<p style={{ color: '#fff', fontSize: '13px' }}>
							Access a wide range of interactive courses designed to enhance
							your learning anytime, anywhere.
						</p>
					</div>
					<div className='col-md-3'>
						<img src='/images/icons/passport.png' />
						<h5 className='text-white mt-4'>Education Loan</h5>
						<p style={{ color: '#fff', fontSize: '13px' }}>
							Simplifying Study Abroad Financing with Vidhyaa Route Studying
							abroad is a life-changing investment — and at Vidhyaa Route.
						</p>
					</div>
					<div className='col-md-3'>
						<img src='/images/icons/castle.png' />
						<h5 className='text-white mt-4'>Student Visa</h5>
						<p style={{ color: '#fff', fontSize: '13px' }}>
							End-to-End Visa Support to Make Your Study Abroad Dream a Reality
							Getting admitted to a university is just the beginning — securing
							your student visa is a critical next step.
						</p>
					</div>
				</div>
			</div>

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
