import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { X, Download, ExternalLink } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
    const containerRef = useRef(null);
    const overlayRef = useRef(null);
    const contentRef = useRef(null);
    // Get base path from import.meta.env for correct asset loading in production
    const basePath = import.meta.env.BASE_URL;
    const resumeUrl = `${basePath}Resume.pdf`;

    useGSAP(() => {
        if (isOpen) {
            // Entrance Animation
            const tl = gsap.timeline();

            tl.set(containerRef.current, { pointerEvents: 'auto' }) // Enable clicks
                .fromTo(overlayRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.5, ease: 'power2.out' }
                )
                .fromTo(contentRef.current,
                    { opacity: 0, y: 50, scale: 0.9, rotateX: 10 },
                    { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.6, ease: 'back.out(1.2)' },
                    "-=0.3"
                );
        }
    }, [isOpen]);

    const handleClose = () => {
        // Exit Animation
        const tl = gsap.timeline({
            onComplete: onClose
        });

        tl.to(contentRef.current, { opacity: 0, y: 20, scale: 0.95, duration: 0.3, ease: 'power2.in' })
            .to(overlayRef.current, { opacity: 0, duration: 0.3 }, "-=0.1");
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
            style={{ pointerEvents: 'none' }} // Initially disabled until animation starts
        >
            {/* Backdrop */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div
                ref={contentRef}
                className="relative w-full max-w-5xl h-[85vh] bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0a0a]">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" onClick={handleClose} />
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
                        <span className="ml-4 text-sm font-mono text-gray-400"> resume.pdf</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href={resumeUrl}
                            download
                            className="p-2 text-gray-400 hover:text-[#F48FB1] hover:bg-white/5 rounded-lg transition-colors"
                            title="Download PDF"
                        >
                            <Download size={18} />
                        </a>
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-[#F48FB1] hover:bg-white/5 rounded-lg transition-colors"
                            title="Open in New Tab"
                        >
                            <ExternalLink size={18} />
                        </a>
                        <button
                            onClick={handleClose}
                            className="p-2 text-gray-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 w-full bg-[#1a1a1a] relative group">
                    {/* Loading / Fallback state visually */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
                        <span className="animate-pulse">Loading Document...</span>
                    </div>

                    <iframe
                        src={resumeUrl}
                        className="w-full h-full relative z-10"
                        title="Resume PDF"
                    />
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ResumeModal;
