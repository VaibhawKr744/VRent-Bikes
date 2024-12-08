import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Modal from '../ui/Modal';

const PhoneModal = ({ isOpen, onClose, onSubmit, loading }) => {
  const [phone, setPhone] = useState('+91');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (phone.length !== 13) {
      setError('Please enter a valid Indian phone number (+91XXXXXXXXXX)');
      return;
    }

    try {
      await onSubmit(phone);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-black mb-4">
          Login with Phone
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91XXXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F9E356] focus:border-[#F9E356] text-black"
              disabled={loading}
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-[#F9E356] px-4 py-2 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              disabled={loading}
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Send OTP
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default PhoneModal;