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
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const [hasDomain, setHasDomain] = useState(false);

    const handleOptionChange = (event) => {
        const { value } = event.target;
        setHasDomain(value === 'yes');
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add code here to send the formData to your backend or perform any other actions.
        console.log(formData);
    };

    return (
        <div className="form-container">
            {window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc9ugEvIXDjNdA7xUkOCFTSeJp4HeHU3P_ad6z8s4eo9DWmgg/viewform?usp=sf_link"}

            {/* <h1 className="form-title">Maintanenece & Support  Requirement Form!</h1>
            <form onSubmit={handleSubmit} className="formseo">
                <h2>Website Details:</h2>
                <div className='form-div'>
                    <label className="form-label">Website Name/Title:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}

                        className="form-input"
                        required
                    />

                </div>
                <div className='form-div'>
                    <label className="form-label"> Website URL:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        className="form-input"

                        required
                    />

                </div>


                <div className='form-div'>
                    <label className="form-label"> Description of the Website :</label>
                    <textarea
                        id="Dycompanybriefly"
                        name="Dycompanybriefly"
                        value={formData.Dycompanybriefly}
                        onChange={handleInputChange}
                        placeholder='Maintenance/Support Needs'

                    ></textarea>

                </div>
                <h2>Frequency and Timing::</h2>
                <div className='form-div'>
                    <label className="form-label">Maintenance Schedule :</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder='(Weekly, Monthly, etc.)'
                        className="form-input"
                        required
                    />

                </div>
                <div className='form-div'>
                    <label className="form-label"> Preferred Maintenance Days/Time:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        className="form-input"
                        placeholder=' Message/Feeling to Convey'
                        required
                    />

                </div>

                <div className='form-div'>
                    <label className="form-label"> Emergency Support Availability:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        className="form-input"
                        placeholder=''
                        required
                    />

                </div>

                <h2>Communication Preferences:</h2>
                <div className='form-div'>

                    <label className="form-label">Preferred Method of Contact:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Best Time to Reach You:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}

                        className="form-input"

                    />
                </div>
            
                <div className='seo-button'>

                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form> */}
        </div>
    );
};

export default Index
