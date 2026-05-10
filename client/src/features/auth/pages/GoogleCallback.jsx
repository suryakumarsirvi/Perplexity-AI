import { useEffect, useState } from 'react';

const GoogleCallback = () => {
    const [message, setMessage] = useState('Processing Google sign-in...');

    useEffect(() => {
        const completeGoogleAuth = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_URL ?? '/api';
                const response = await fetch(`${baseUrl}/auth/getMe`, {
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Unable to verify Google session');
                }

                const data = await response.json();
                const payload = data.data || data;

                setMessage('Google sign-in successful. Closing popup...');

                if (window.opener && !window.opener.closed) {
                    localStorage.setItem('googleAuthSuccess', JSON.stringify(payload));
                    window.close();
                    return;
                }

                localStorage.setItem('googleAuthSuccess', JSON.stringify(payload));
                window.location.href = '/home';
            } catch (error) {
                setMessage(error.message || 'Google authentication failed. Please try again.');
            }
        };

        completeGoogleAuth();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white px-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/95 p-8 text-center shadow-2xl">
                <p className="text-lg font-medium">{message}</p>
            </div>
        </div>
    );
};

export default GoogleCallback;