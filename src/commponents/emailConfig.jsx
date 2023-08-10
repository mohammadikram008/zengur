const emailConfig = {
    host: 'smtp.your-email-provider.com',
    port: 587,
    secure: false, // Set to true if using a secure connection (like SSL/TLS)
    auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
    },
};

export default emailConfig;