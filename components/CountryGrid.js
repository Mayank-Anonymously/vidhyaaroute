import React from 'react';
import SectionHeading from './ui/SectionHeading';

const countries = [
	{ name: 'USA', image: '/images/countries/usa.jpg' },
	{ name: 'UK', image: '/images/countries/uk.jpg' },
	{ name: 'EUROPEAN', image: '/images/countries/europe.jpg' },
	{ name: 'AUSTRALIA', image: '/images/countries/australia.jpg' },
	{ name: 'FRANCE', image: '/images/countries/france.jpg' },
	{ name: 'IRELAND', image: '/images/countries/ireland.jpg' },
	{ name: 'CANADA', image: '/images/countries/canada.jpg' },
	{ name: 'NEW ZEALAND', image: '/images/countries/newzealand.jpg' },
];

const CountryGrid = () => {
	return (
		<section className='py-5 bg-white'>
			<div className='container'>
				<SectionHeading
					label='TOP COUNTRIES'
					title='Best Countries to Study'
				/>
				<div className='row g-4'>
					{countries.map((country, index) => (
						<div
							className='col-12 col-sm-6 col-md-3'
							key={index}>
							<div
								className='border rounded overflow-hidden shadow-sm position-relative'
								style={{
									borderBottom: '4px solid #ddd',
									transition: 'border-color 0.3s ease',
									cursor: 'pointer',
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.borderBottom = '4px solid green')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.borderBottom = '4px solid #ddd')
								}>
								{/* Image with relative container */}
								<div className='position-relative'>
									<img
										src={country.image}
										alt={country.name}
										className='img-fluid'
										style={{
											height: '250px',
											objectFit: 'cover',
											width: '100%',
										}}
									/>
									<div
										className='position-absolute start-0 end-0 text-center fw-medium text-muted'
										style={{
											bottom: '5px',
											backgroundColor: 'rgba(255, 255, 255, 0.85)',
											padding: '8px 0',
										}}>
										{country.name}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CountryGrid;
