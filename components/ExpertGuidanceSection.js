import Link from 'next/link';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import SectionHeading from './ui/SectionHeading';

const ExpertGuidanceSection = () => {
	return (
		<section
			className='py-5  bg-white position-relative overflow-hidden'
			style={{
				backgroundImage: 'url("/images/mapbg.png")',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}>
			<div className='container position-relative z-1'>
				<SectionHeading
					label='ABOUT US'
					title='Expert Guidance for Overseas Admissions'
				/>
				<div className='row align-items-center gy-5'>
					{/* Left Image */}
					<div className='col-lg-3 text-center'>
						<Image
							src='/images/aboutus/traveller.png' // Replace with your actual image
							alt='Traveler'
							width={250}
							height={500}
							className='img-fluid'
						/>
					</div>

					{/* Center Content */}
					<div className='col-lg-4'>
						<p className='text-uppercase fw-bold small text-blue mb-2'>
							Who We Are?
						</p>
						<h2 className='fw-bold text-blue mb-4'>
							Expert Guidance for <br /> Overseas Admissions
						</h2>
						<p className='text-muted mb-4'>
							Vidhyaa Route is a premier consultancy specializing in overseas
							university admissions in the UK, USA, Canada, Ireland, France, and
							many other countries. We provide end-to-end support, including
							visa processing and education loan assistance, ensuring a smooth
							and hassle-free journey for students. With our expertise and
							personalized guidance, we help students achieve their dreams of
							studying abroad with confidence.
						</p>
						<Link
							href='/about'
							className='btn-blue'>
							More Details →
						</Link>
					</div>

					{/* Right Images Grid */}
					<div className='col-lg-5'>
						<div className='d-flex flex-column gap-2'>
							<div className='row g-3'>
								<div className='col-4'>
									<Image
										src='/images/aboutus/plane.jpg'
										alt='Plane in Hand'
										width={500}
										height={500}
										className='img-fluid rounded'
									/>
								</div>
								<div className='col-6'>
									<div className='d-flex flex-column gap-2 h-100'>
										<Image
											src='/images/studentnew.jpg'
											alt='Couple Exploring'
											width={500}
											height={500}
											className='img-fluid rounded h-100'
										/>

										<Image
											src='/images/aboutus/usflag.jpg'
											alt='Visa Document'
											width={500}
											height={350}
											className='img-fluid rounded mt-2 h-100'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExpertGuidanceSection;
