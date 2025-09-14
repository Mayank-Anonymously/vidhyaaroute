import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

const OpeningModal = ({ isOpen, onClose }) => {
	const [form, setForm] = useState({
		name: '',
		phone: '',
		email: '',
		query: '',
	});
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handlePhoneChange = (value) => {
		setForm((prev) => ({ ...prev, phone: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await axios.post(
				// 'http://192.168.1.10:3202/api/v1/query/raise-direct-query',
				'https://api.vidhyaroute.com/api/v1/query/raise-query', 
				form
			);

			if (response.data.success) {
				setMessage(
					'✅ Query submitted successfully! We Will get touch within 24 hours.'
				);
				setForm({ name: '', phone: '', email: '', query: '' }); // reset form
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
				<h2 className='admission-modal__title'>Send your Queries</h2>
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

					<textarea
						className='admission-modal__textarea'
						name='query'
						placeholder='Enter your query here...'
						value={form.query}
						onChange={handleChange}
						required
					/>

					{loading ? (
						<span className='admission-modal__submit-btn'>
							<div
								className='spinner-border justify-content-center align-items-center'
								role='status'>
								<span className='sr-only'></span>
							</div>
						</span>
					) : (
						<button
							type='submit'
							className='admission-modal__submit-btn'
							disabled={loading}>
							Submit
						</button>
					)}
				</form>

				{message && (
					<p style={{ marginTop: '10px', textAlign: 'center' }}>{message}</p>
				)}
			</div>
		</div>
	);
};

export default OpeningModal;
