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
            <h1 className="form-title">Domian & Hosting  Requirement Form!</h1>
            <form onSubmit={handleSubmit} className="formseo">
                <h2>Project Details:</h2>
                <div className='form-div'>
                    <label className="form-label">Project Name/Title:</label>
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
                    <label className="form-label"> Description of the Project and Hosting Requirements:</label>
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

                <h2>Domain Requirements:</h2>
                <div className='form-div'>

                    <label className="form-label">Domain Name Preference:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder=' (if known)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Domain Extension (e.g-.com, .net, .org):</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder=' (if known)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Additional Domain Names (if needed):</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder=' (if any)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Domain Privacy Protection (Yes/No):</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder=' (if any)'
                        className="form-input"

                    />
                </div>
                <h2>Hosting Requirements:</h2>
                <div className='form-div'>
                    <label className="form-label">Hosting Type :</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder='(Shared, VPS, Dedicated, Cloud, etc.)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Storage Space Needed:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder=' (if known)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Bandwidth/Transfer Limit:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder=' (if any)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Operating System Preference (if applicable):</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder='(if applicable)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Control Panel Preference (if applicable):</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder='(if applicable)'
                        className="form-input"

                    />
                </div>
                <h2>Technical Specifications:</h2>
                <div className='form-div'>

                    <label className="form-label">Website Platform/CMS :</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        className="form-input"
                        placeholder='(e.g., shopify, WordPress, Joomla, etc.)'
                        required
                    />
                </div>


                <div className='form-div'>

                    <label className="form-label"> Database Requirements (if applicable):</label>
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

                    <label className="form-label"> Email Hosting Requirements (if applicable):</label>
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

                    <label className="form-label"> SSL Certificate Needed:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        className="form-input"
                        placeholder=' (Yes/No)'
                        required
                    />
                </div>

                <h2>Additional Services:</h2>
                <div className='form-div'>

                    <label className="form-label">Content Migration/Transfer :</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        className="form-input"
                        placeholder='(Yes/No)'
                        required
                    />
                </div>
                <div className='form-div'>

                    <label className="form-label">Backup and Restore Services:</label>
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
            </form>
        </div>
    );
};

export default Index
