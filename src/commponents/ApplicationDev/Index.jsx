import React, { useState } from 'react'
import './Index.css'
const Index = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        websiteURL: '',
        targetKeywords: '',
        competitors: '',
        desiredOutcomes: '',
        additionalNotes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add code here to send the formData to your backend or perform any other actions.
        console.log(formData);
    };

    return (
        <div className="form-container">
            <h1 className="form-title">work in Progress....</h1>
            <div>
                {/* <h2>Submit Your Requirements</h2>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOsZ7ikws7Rbql4g8z7mjV3RSHPLHRv9J6jkjA03Ki93s-5Q/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}


            </div>

        </div>
    );
};

export default Index
