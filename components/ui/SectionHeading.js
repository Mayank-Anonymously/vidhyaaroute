import Image from 'next/image';

const SectionHeading = ({ label, title }) => {
	return (
		<div className='text-center mb-5'>
			<span className='visa-label d-block'>{label}</span>
			<div className='star-with-lines-container my-2'>
				<Image
					src='/images/icons/star.png'
					alt='Star Icon'
					width={25}
					height={25}
					className='star-image'
				/>
			</div>
			<h2 className='fs-3 fw-bold text-blue mb-0'>{title}</h2>
		</div>
	);
};

export default SectionHeading;
