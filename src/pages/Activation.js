import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { activateAccount } from '../fetch/activationTokenFetch.js';

const ActivationPage = () => {
    const location = useLocation();

    const query = new URLSearchParams(location.search);
    const token = query.get('token');

    useEffect(() => {
        if (token) {
            activateAccount(token).then(response => {
                window.location.href = '/login';
            }).catch(error => {
                console.error('Activation error:', error);
            });
        }
    }, [token]);

    return (
        <div>
            <h1>Account Activation</h1>
            <p>Please wait, your account is being activated...</p>
        </div>
    );
};

export default ActivationPage;
