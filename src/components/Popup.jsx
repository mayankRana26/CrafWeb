// src/components/Popup.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import soundFile from '../assets/ting.mp3';

const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 5 सेकंड बाद popup दिखाएं
        const timer = setTimeout(() => setIsVisible(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    // जब popup visible हो, sound play करें
    useEffect(() => {
        if (isVisible) {
            const audio = new Audio(soundFile);
            audio.play().catch(err => console.error("Failed to play sound:", err));
        }
    }, [isVisible]);

    const closePopup = () => setIsVisible(false);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-4 right-4 z-50 p-6 bg-cyan-700 text-white rounded-lg shadow-lg max-w-sm"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold">How can I help you?</h3>
                        <button onClick={closePopup} className="text-white text-2xl font-bold leading-none">&times;</button>
                    </div>
                    <p className="text-sm mb-4">
                        I'm here to build your dream website or application. Let's start a conversation!
                    </p>
                    <a href="/contact" className="w-full block text-center py-2 px-4 bg-gray-800 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                        Contact Me
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Popup;
