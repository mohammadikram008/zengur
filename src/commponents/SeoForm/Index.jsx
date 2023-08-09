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
            <h1 className="form-title">SEO Requirement Form!</h1>
            <form onSubmit={handleSubmit} className="formseo">

                {/* <div className='domian-div'>
                    <h3>Project Name/Title:</h3>
                    <div className='radio-graphic'>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="domain"
                                value="yes"
                                checked={hasDomain}
                                onChange={handleOptionChange}
                            />
                            <span >Logo</span>
                        </div>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="domain"
                                value="no"
                                checked={!hasDomain}
                                onChange={handleOptionChange}
                            />
                            <span >Poster</span>
                        </div>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="domain"
                                value="no"
                                checked={!hasDomain}
                                onChange={handleOptionChange}
                            />

                            <span >Brochure</span>
                        </div>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="domain"
                                value="no"
                                checked={!hasDomain}
                                onChange={handleOptionChange}
                            />

                            <span >Catalogue</span>
                        </div>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="domain"
                                value="no"
                                checked={!hasDomain}
                                onChange={handleOptionChange}
                            />

                            <span>Social Media Posts</span>
                        </div>


                    </div>
                </div> */}
                {/* <div className='form-div'>
                    <label className="form-label">Dimensions:</label>
                    <div className="dimension">
                        <input
                            type="text"
                            id="desiredOutcomes"
                            name="desiredOutcomes"
                            value={formData.desiredOutcomes}
                            onChange={handleChange}
                            placeholder='Fonts'
                            className="form-input"
                            required
                        />
                        <input
                            type="text"
                            id="desiredOutcomes"
                            name="desiredOutcomes"
                            placeholder='Sizes'
                            value={formData.desiredOutcomes}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                        <input
                            type="text"
                            id="desiredOutcomes"
                            name="desiredOutcomes"
                            placeholder='Styles'
                            value={formData.desiredOutcomes}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>


                </div> */}
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


                {/* <div className='form-div'>

                    <label className="form-label">Draft Text (or attach and submit file above):</label>
                    <textarea
                        id="Dycompanybriefly"
                        name="Dycompanybriefly"
                        value={formData.Dycompanybriefly}
                        onChange={handleInputChange}

                        className='textarea-graphic'
                    // placeholder='Describe your company briefly'

                    ></textarea>
                </div>
                <div className='form-div'>
                    <label className="form-label"> Logos, Photos or Other Graphics:</label>

                    <input type="file" onChange={handleFileChange} />
                    {selectedFile && <p> {selectedFile.name}</p>}
                </div>
                <div className='form-div'>
                    <label className="form-label">Color Palette & Theme:</label>
                    <textarea
                        id="Dycompanybriefly"
                        name="Dycompanybriefly"
                        value={formData.Dycompanybriefly}
                        onChange={handleInputChange}
                        className='textarea-graphic'
                    // placeholder='Describe your company briefly'

                    ></textarea>
                </div> */}
                {/* <div className='form-div'>

                    <label className="form-label">Desired Outcomes:</label>
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

                    <label className="form-label">Additional Notes:</label>
                    <input
                        type="text"
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div> */}

                {/* ... Similar fields for other form inputs */}

                <div className='seo-button'>

                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Index
