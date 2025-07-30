import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios'; // ✅ Import axios

const universityData = {
	USA: ['Harvard University', 'Stanford University', 'MIT'],
	Canada: [
		'University of Toronto',
		'McGill University',
		'University of British Columbia',
	],
	Australia: [
		'University of Sydney',
		'Monash University',
		'University of Melbourne',
	],
	UK: [
		'University of Oxford',
		'University of Cambridge',
		'Imperial College London',
	],
	Germany: ['LMU Munich', 'TU Berlin', 'Heidelberg University'],
};

const AdmissionModal = ({ isOpen, onClose }) => {
	const [form, setForm] = useState({
		name: '',
		phone: '',
		email: '',
		country: '',
		university: '',
	});
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
			...(name === 'country' && { university: '' }), // reset university if country changes
		}));
	};

	const handlePhoneChange = (value) => {
		setForm((prev) => ({ ...prev, phone: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setMessage('');
		try {
			// ✅ API request to your backend
			const response = await axios.post(
				'http://localhost:3202/api/v1/query/raise-query',
				form
			);

			if (response.data.success) {
				setMessage(
					'✅ Query submitted successfully! Check your email for confirmation.'
				);
				onClose(); // close modal after success
			} else {
				setMessage('❌ Failed to submit query. Please try again.');
			}
		} catch (error) {
			console.error('Error submitting query:', error);
			setMessage(error.response?.data?.message || '❌ Something went wrong!');
		} finally {
			setLoading(false);
		}
	};

	if (!isOpen) return null;

	return (
		<div className='admission-modal__overlay'>
			<div className='admission-modal__container'>
				<button
					className='admission-modal__close-btn'
					onClick={onClose}>
					×
				</button>
				<h2 className='admission-modal__title'>Get Your Admission</h2>
				<form
					className='admission-modal__form'
					onSubmit={handleSubmit}>
					<input
						className='admission-modal__input'
						type='text'
						name='name'
						placeholder='Full Name'
						value={form.name}
						onChange={handleChange}
						required
					/>

					<PhoneInput
						country={'us'}
						value={form.phone}
						onChange={handlePhoneChange}
						inputProps={{
							name: 'phone',
							required: true,
							placeholder: 'Phone Number',
						}}
						containerClass='admission-modal__phone-container'
						inputClass='admission-modal__input'
					/>

					<input
						className='admission-modal__input'
						type='email'
						name='email'
						placeholder='Email'
						value={form.email}
						onChange={handleChange}
						required
					/>

					<select
						className='admission-modal__select'
						name='country'
						value={form.country}
						onChange={handleChange}
						required>
						<option value=''>Select your preferred study destination</option>
						{Object.keys(universityData).map((country) => (
							<option
								key={country}
								value={country}>
								{country}
							</option>
						))}
					</select>

					<select
						className='admission-modal__select'
						name='university'
						value={form.university}
						onChange={handleChange}
						required
						disabled={!form.country}>
						<option value=''>Select your preferred study university</option>
						{form.country &&
							universityData[form.country].map((uni) => (
								<option
									key={uni}
									value={uni}>
									{uni}
								</option>
							))}
					</select>

					<button
						type='submit'
						className='admission-modal__submit-btn'
						disabled={loading}>
						{loading ? 'Submitting...' : 'Submit'}
					</button>
				</form>
				{message && (
					<p style={{ marginTop: '10px', textAlign: 'center' }}>{message}</p>
				)}
			</div>
		</div>
	);
};

export default AdmissionModal;
