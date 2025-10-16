// src/components/AdminPage/OTPModal.jsx
import React, { useState, useRef, useEffect } from "react";

/**
 * OTPModal - front-end only testing version
 *
 * Props:
 *  - email: string (for display)
 *  - onVerified: function() -> call this when OTP is valid (parent will show dashboard)
 *  - onClose: function() -> call this when modal should close (e.g., click outside)
 *
 * This version uses a DUMMY_OTP for local testing (no backend required).
 * Change DUMMY_OTP when backend is ready or to test different codes.
 */
const OTPModal = ({ email, onVerified, onClose }) => {
  // store 6 digits separately for nicer UX
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  // refs to each input to control focus
  const inputRefs = useRef([]);

  // Dummy OTP for testing. Change this to simulate different OTPs.
  const DUMMY_OTP = "123456";

  // Auto-focus the first input when modal opens
  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  // Clear OTP inputs (useful when modal closes or user retries)
  const clearOtp = () => {
    setOtp(["", "", "", "", "", ""]);
    setError("");
  };

  // Update one digit and auto-move focus to next input if filled
  const handleChange = (value, index) => {
    // ignore if paste/multi-char (we only accept 1 char per box)
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value.replace(/[^0-9]/g, ""); // allow only digits
    setOtp(newOtp);

    // move focus forward if user typed a digit
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Allow backspace to move focus back when box is empty
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        // if current box has value, just clear it
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // otherwise move focus back
        inputRefs.current[index - 1]?.focus();
      }
    }

    // Allow ArrowLeft and ArrowRight for navigation
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // When overlay (outside modal) is clicked, close modal and clear OTP
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      clearOtp();
      onClose?.();
    }
  };

  // Submit OTP: here we compare against DUMMY_OTP for local testing
  const handleVerifyOTP = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    // basic validation
    if (otpCode.length !== 6) {
      setError("Please enter a 6-digit OTP");
      return;
    }

    // === Dummy verification (replace with backend call later) ===
    if (otpCode === DUMMY_OTP) {
      setError("");
      onVerified?.(); // notify parent to show dashboard
      clearOtp();
      return;
    }

    // Wrong OTP
    setError("Invalid OTP. Please try again.");
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={handleOverlayClick} // clicking overlay closes modal
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
          OTP Verification
        </h2>

        {/* Instruction */}
        <p className="text-gray-600 text-center mb-6">
          Enter the 6-digit OTP sent to the company head for <br />
          <span className="font-medium text-blue-700">{email}</span>
        </p>

        {/* OTP inputs */}
        <form onSubmit={handleVerifyOTP} className="space-y-5">
          <div className="flex justify-center space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center border rounded-md text-xl focus:ring-2 focus:ring-blue-500"
                aria-label={`OTP digit ${index + 1}`}
              />
            ))}
          </div>

          {/* Error text */}
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Verify OTP
            </button>

            {/* Optional: Cancel button to close modal manually */}
            <button
              type="button"
              onClick={() => {
                clearOtp();
                onClose?.();
              }}
              className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>

          {/* Note for tester */}
          <p className="text-xs text-gray-500 mt-2 text-center">
            For testing: use OTP <span className="font-medium">123456</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default OTPModal;
