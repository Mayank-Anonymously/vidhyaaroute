import React from 'react';

const logos = [
	{ alt: 'SBI', src: '/images/banks/sbi.png' },
	{ alt: 'Union Bank', src: '/images/banks/union.png' },
	{ alt: 'ICICI Bank', src: '/images/banks/icici.png' },
	{ alt: 'Axis Bank', src: '/images/banks/axis.png' },
	{ alt: 'IDFC FIRST', src: '/images/banks/idfc.png' },
	{ alt: 'Prodigy Finance', src: '/images/banks/prodigy.png' },
	{ alt: 'MPOWER', src: '/images/banks/mpower.png' },
	{ alt: 'Credila', src: '/images/banks/credila.png' },
	{ alt: 'Avanse', src: '/images/banks/avanse.png' },
	{ alt: 'Auxilo', src: '/images/banks/auxilo.png' },
	{ alt: 'ICICI Bank', src: '/images/banks/icici.png' },
	{ alt: 'Bank of Baroda', src: '/images/banks/bob.png' },
	{ alt: 'YES BANK', src: '/images/banks/yes.png' },
	{ alt: 'TATA Capital', src: '/images/banks/tata.png' },
	{ alt: 'PNB', src: '/images/banks/pnb.png' },
	{ alt: 'Incred', src: '/images/banks/incred.png' },
];

const PartnerBanks = () => {
	return (
		<section className='py-5 bg-white'>
			<div className='overflow-hidden'>
				<div className='marquee d-flex'>
					{[...logos, ...logos].map((logo, index) => (
						<div
							key={index}
							className='d-flex justify-content-center align-items-center px-4'
							style={{ minWidth: '150px' }}>
							<img
								src={logo.src}
								alt={logo.alt}
								className='img-fluid'
								style={{ maxHeight: '60px', objectFit: 'contain' }}
							/>
						</div>
					))}
				</div>
			</div>

			{/* Inline styles or move to CSS file */}
			<style jsx>{`
				.marquee {
					animation: scroll 40s linear infinite;
					width: fit-content;
				}

				@keyframes scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
			`}</style>
		</section>
	);
};

export default PartnerBanks;
