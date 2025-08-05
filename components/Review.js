import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';

const blogData = [
	{
		title:
			'Rethinking the Gatekeepers: Admissions & Academic Priorities in Study Abroad-2026.',
		date: 'Aug 6, 2025',
		author: 'Vidhyaroute',
		description:
			"In 2026, the global study abroad game isn’t just about where you go—it's how you get in. And spoiler alert: the rules of admission are changing fast.",
		image: '/images/smileyoung.jpg',
	},
	{
		title: 'The New Map of Study Abroad in 2026',
		date: 'Aug 5, 2025',
		author: 'Vidhyaroute',
		description: '',
		description:
			'This year, a seismic shift is redefining how students choose where to learn, live, and launch their global careers. And it’s not just about new countries rising — it’s about students rewriting the rules entirely.',
		image: '/images/camera.jpg',
	},
	{
		title:
			'Borders, Bureaucracy & Breakthroughs: The 2026 Student Visa & Policy Landscape',
		date: 'Aug 4, 2025',
		author: 'Vidhyaroute',
		description:
			'You’ve aced your tests. Crafted the perfect personal statement. Built a dazzling portfolio.',

		image: '/images/smilefemale.jpg',
	},
];

const Review = () => {
	return (
		<>
			<section
				className='py-5  bg-white position-relative overflow-hidden'
				style={{
					backgroundImage: 'url("/images/reviewbg.png")',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}>
				<div className='container position-relative z-1'>
					<SectionHeading
						label='Blogs'
						title='World Immigration News & Updates'
					/>
					<div
						className='container'
						style={{ marginBottom: '100px' }}>
						<div className='row g-4'>
							{blogData.map((item, index) => (
								<div
									key={index}
									className='col-12 col-md-4'>
									<div className='card h-100 shadow-sm rounded-4 overflow-hidden border-0'>
										{/* Image */}
										<img
											src={item.image}
											className='card-img-top'
											alt={item.title}
											style={{ height: '220px', objectFit: 'cover' }}
										/>

										{/* Card Body */}
										<div className='card-body'>
											<div className='d-flex text-muted small mb-2 gap-3'>
												<div className='d-flex align-items-center gap-1'>
													<FaUser className='text-blue' />{' '}
													<span>By {item.author}</span>
												</div>
												<div className='d-flex align-items-center gap-1'>
													<FaCalendarAlt className='text-blue' />{' '}
													<span>{item.date}</span>
												</div>
											</div>

											<h5 className='fw-semibold text-blue'>{item.title}</h5>

											<p
												className='pt-3 pb-4 small text-muted'
												style={{
													borderBottom: '1px solid #dddddd',
												}}>
												{item.description}
											</p>

											<a
												href='#'
												className='text-blue small fw-semibold'>
												Read More →
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Review;
