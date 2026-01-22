import React, { useState, useEffect } from 'react';
import './AdmissionsModal.css';
import admissionImage from '../assets/uploaded_poster.png';

interface AdmissionsModalProps {
    onClose?: () => void;
}

const AdmissionsModal: React.FC<AdmissionsModalProps> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if modal has been shown in this session
        const hasShownModal = sessionStorage.getItem('admissionsModalShown');

        if (!hasShownModal) {
            // Show modal after a small delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
                sessionStorage.setItem('admissionsModalShown', 'true');
            }, 500);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) {
            onClose();
        }
    };

    const handleApplyNow = () => {
        window.location.hash = 'admissions';
        handleClose();
    };

    const handleContactUs = () => {
        window.location.hash = 'contact';
        handleClose();
    };

    if (!isVisible) {
        return null;
    }

    return (
        <>
            <div className="admissions-modal-overlay" onClick={handleClose} />
            <div className="admissions-modal">
                <button
                    className="modal-close-btn"
                    onClick={handleClose}
                    aria-label="Close modal"
                >
                    ×
                </button>

                <div className="modal-content">
                    <div className="modal-image-container">
                        <img src={admissionImage} alt="Admission Open" className="modal-image" />
                    </div>
                    <div className="modal-text-content">
                        <div className="modal-actions">
                            <button
                                className="btn btn-primary"
                                onClick={handleApplyNow}
                            >
                                Admission Enquiry
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={handleContactUs}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdmissionsModal;
