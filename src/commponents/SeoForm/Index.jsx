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
            {window.location.href = " https://docs.google.com/forms/d/e/1FAIpQLSezCEmhWWbLwH0xpZH-CrTUnsXvLUw55AUB9s8okm0wUPTtJA/viewform?usp=sf_link"}

            {/* <h1 className="form-title">SEO Requirement Form!</h1>
            <form onSubmit={handleSubmit} className="formseo">
                <h2>Project Objectives:</h2>
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
                    <label className="form-label"> Website URL:</label>
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
                    <label className="form-label">Description of the Project and SEO Goals:</label>
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
                <h2>Current SEO Status:</h2>
                <div className='form-div'>

                    <label className="form-label">Current Website Traffic:</label>
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
                    <label className="form-label">Current Keyword Rankings:</label>
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
                    <label className="form-label">Previous SEO Efforts:</label>
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
                <h2>Target Audience and Keywords:</h2>
                <div className='form-div'>

                    <label className="form-label">Target Audience :</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        placeholder='(Demographics, Geographical Area)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Primary Keywords:</label>
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
                    <label className="form-label">Secondary Keywords:</label>
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
                    <label className="form-label">Long-Tail Keywords :</label>
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

                <h2>Additional Information:</h2>
                <div className='form-div'>

                    <label className="form-label">Design Style Preferences:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        className="form-input"
                        placeholder='(Minimalist, Vintage, Modern, etc.)'
                        required
                    />
                </div>


                <div className='form-div'>

                    <label className="form-label"> Any Other Specific Requirements:</label>
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

                <h2>Competitor Analysis:</h2>
                <div className='form-div'>

                    <label className="form-label">Competitor Websites:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="desiredOutcomes"
                        value={formData.desiredOutcomes}
                        onChange={handleChange}
                        className="form-input"
                        placeholder='(URLs)'
                        required
                    />
                </div>
                <div className='form-div'>

                    <label className="form-label">Key Competitors' Strengths and Weaknesses:</label>
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

                    <label className="form-label">Key Competitors' Strengths and Weaknesses:</label>
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
