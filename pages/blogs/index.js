import React from 'react';
import { useRouter } from 'next/router';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import axios from 'axios';
import { HOST } from '@/utils/static';
import BreadcrumbBanner from '@/components/BreadCrumbBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/ui/Footer';
import moment from 'moment';

const Blogs = ({ blogsData }) => {
	const router = useRouter();

	return (
		<>
			<Navbar />
			<BreadcrumbBanner title={'All Blogs'} />

			<section
				className='py-5 bg-white position-relative overflow-hidden'
				style={{
					backgroundImage: 'url("/images/reviewbg.png")',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}>
				<div className='container position-relative z-1'>
					<div
						className='container fluid'
						style={{ marginBottom: '100px' }}>
						<div className='row g-4'>
							{blogsData.map((item, index) => {
								item.author = 'Vidhyaa Route';
								return (
									<div
										key={index}
										className='col-12 col-md-4'>
										<div className='card h-100 shadow-sm rounded-4 overflow-hidden border-0'>
											<img
												src={`https://api.vidhyaroute.com/resources/${item.image}`}
												className='card-img-top'
												alt={item.title}
												style={{ height: '220px', objectFit: 'cover' }}
											/>
											<div className='card-body'>
												<div className='d-flex text-muted small mb-2 gap-3'>
													<div className='d-flex align-items-center gap-1'>
														<FaUser className='text-blue' />{' '}
														<span>By {item.author}</span>
													</div>
													<div className='d-flex align-items-center gap-1'>
														<FaCalendarAlt className='text-blue' />{' '}
														<span>
															{moment(item.createdAt).format('DD-MM-YYYY')}
														</span>
													</div>
												</div>

												<h5 className='fw-semibold text-blue'>{item.title}</h5>

												<p
													className='pt-3 pb-4 small text-muted'
													style={{ borderBottom: '1px solid #dddddd' }}>
													{item.meta_description}
												</p>

												<button
													className='btn btn-link text-blue small fw-semibold p-0'
													onClick={() =>
														router.push(`/blogs/${item.page_url}`)
													}>
													Read More →
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Blogs;

export const getServerSideProps = async () => {
	const resblogs = await axios.get(`${HOST}blogs/all`);

	return {
		props: {
			blogsData: resblogs.data?.response || null, // safe optional chaining
		},
	};
};
