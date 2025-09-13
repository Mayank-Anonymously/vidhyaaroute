import BreadcrumbBanner from '@/components/BreadCrumbBanner';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/business/Sidebar';
import Footer from '@/components/ui/Footer';
import { HOST } from '@/utils/static';
import axios from 'axios';
import {
	Briefcase,
	Calendar,
	CheckCircle,
	ExternalLink,
	FileText,
} from 'lucide-react';
import React from 'react';

const OverseasAdmission = ({ data }) => {
	console.log(data);

	return (
		<>
			<Navbar />
			<BreadcrumbBanner title={data.category} />
			<div
				className='container'
				style={{ marginTop: '100px' }}>
				<div className='row'>
					<div className='col-lg-12 col-md-12'>
						<div className='p-4'>
							<img
								src={`https://api.vidhyaroute.com/resources/${data.image}`}
								alt={data.page_image_tag}
								className='w-100 h-auto'
								style={{ height: '200px', objectFit: 'cover' }}
							/>
							<div
								className='mb-5'
								dangerouslySetInnerHTML={{ __html: data.page_content }}
							/>

							<div className='bg-primary text-white p-4 rounded mb-4'>
								<div className='row align-items-center'>
									<div className='col-lg-8'>
										<h3 className='mb-2'>
											Need Help With Your Overseas Visa Application?
										</h3>
										<p className='mb-0'>
											Get personal guidance for form filling, appointment
											booking, and document checklist tailored to your travel
											plans.
										</p>
									</div>
									<div className='col-lg-4 text-lg-end'>
										<a href='tel:+91 8920949831'>
											<button className='btn btn-light btn-lg'>
												<Calendar
													className='me-2'
													size={20}
												/>
												Book Visa Consultation
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default OverseasAdmission;

export const getServerSideProps = async (context) => {
	const { query } = context;
	const { cardtitle } = query;
	const res = await axios.get(`${HOST}services/${cardtitle}`);
	return {
		props: {
			data: res.data.response || null, // safe optional chaining
		},
	};
};
