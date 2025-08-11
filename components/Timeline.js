import React from 'react';
import SectionHeading from './ui/SectionHeading';

const Timeline = () => {
	const timelineData = [
		{
			title: 'Getting Admission Offer from a University',
			content: (
				<ul>
					<li>
						Research & Shortlist Universities: Based on country, course, budget,
						and ranking.
					</li>
					<li>
						Prepare Application Documents: Includes academic transcripts, SOP,
						LORs, resume, and test scores.
					</li>
					<li>Apply to Universities: Often via portals (e.g. UCAS).</li>
				</ul>
			),
		},
		{
			title: 'Receive Admission Confirmation',
			content: (
				<ul>
					<li>Accept Offer & Pay Initial Deposit.</li>
					<li>Get Admission Letter / I-20 / CAS.</li>
					<li>Required for visa application.</li>
				</ul>
			),
		},
		{
			title: 'Education Loan Processing',
			content: (
				<ul>
					<li>Choose loan provider (Banks, NBFCs, or international).</li>
					<li>
						Submit Admission Letter, Fee Structure, KYC, Income & Collateral
						docs.
					</li>
				</ul>
			),
		},
		{
			title: 'Student Visa Application Process',
			content: (
				<ul>
					<li>
						Collect documents: Passport, Admission Letter, Financial proof, Visa
						forms, etc.
					</li>
					<li>
						Attend Interview or Biometric appointment depending on country.
					</li>
				</ul>
			),
		},
		{
			title: 'Post-Visa Steps (Optional but Crucial)',
			content: (
				<ul>
					<li>Pre-departure briefing</li>
					<li>Accommodation & Insurance</li>
					<li>Forex and Travel Insurance</li>
					<li>University registration & orientation</li>
				</ul>
			),
		},
	];

	return (
		<section className='timeline-section py-5 bg-white position-relative overflow-hidden'>
			<div
				className='timeline-banner w-full'
				style={{
					backgroundImage: "url('/images/mapbg.png')",
					backgroundBlendMode: 'multiply',
					backgroundColor: '#032B66',
				}}>
				<div className='text-center heading-div'>
					<span className='visa-label d-block text-white'>STUDENT JOURNEY</span>
					<div className='star-with-lines-container-white my-2'>
						<img
							src='/images/icons/whitestar.png'
							alt='Star Icon'
							width={25}
							height={20}
							className='star-image'
						/>
					</div>
					<h2 className='fs-3 fw-bold text-white mb-0'>
						Guiding Your Study Abroad Journey Step-by-Step
					</h2>
				</div>
			</div>

			<div className='container py-5'>
				{/* Timeline Header - Hidden on mobile */}
				<div className='timeline-container position-relative mb-3'>
					{/* Timeline Line with End Dots */}
					<div className='timeline-line'></div>

					{/* Icons and Step Numbers */}
					<div className='timeline-steps'>
						{[1, 2, 3, 4, 5].map((step, index) => (
							<div key={index} className='timeline-step'>
								<img
									src={`/images/icons/${step}.png`}
									alt={`Step ${step}`}
								/>
								<div className='timeline-step-number'>{step}</div>
							</div>
						))}
					</div>
				</div>

				{/* Cards Below Timeline */}
				<div className='timeline-cards-container pt-4'>
					{timelineData.map((item, index) => (
						<div key={index} className='timeline-card'>
							<h6 className='text-center'>{item.title}</h6>
							<div className='text-muted mt-2'>{item.content}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Timeline;
