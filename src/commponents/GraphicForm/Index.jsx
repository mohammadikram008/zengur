import React, { useState } from 'react'
import './Index.css'
import emailjs from "@emailjs/browser";
import {
    addTask,
    getTasks,
    addGraphic,
    updateTask,
    deleteTask,
} from "../services/TaskServices";
const Index = () => {
    const [formData, setFormData] = useState({
        log: '',
        other: '',
        font: '',
        size: '',
        style: '',
        targetaudience: '',
        Purpose: '',
        KeyInformationtoInclude: '',
        CalltoAction: '',
        DesignStylePreferences: '',
        AnyOtherSpecificRequirements: '',
        DeliveryMethod: '',
        DropBoxinserthere: '',

    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [tasks, setTasks] = useState([]);
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = tasks;
        const formdatas = new FormData();
        formdatas.append('log', formData.log);
        formdatas.append('other', formData.other);
        formdatas.append('font', formData.font);
        formdatas.append('size', formData.size);
        formdatas.append('style', formData.style);
        formdatas.append('targetaudience', formData.targetaudience);
        formdatas.append('Purpose', formData.Purpose);
        formdatas.append('KeyInformationtoInclude', formData.KeyInformationtoInclude);
        formdatas.append('CalltoAction', formData.CalltoAction);
        formdatas.append('DesignStylePreferences', formData.DesignStylePreferences);
        formdatas.append('AnyOtherSpecificRequirements', formData.AnyOtherSpecificRequirements);
        formdatas.append('DeliveryMethod', formData.DeliveryMethod);
        formdatas.append('DropBoxinserthere', formData.DropBoxinserthere);
        formdatas.append('DesignProduct', hasDomain);
        formdatas.append('file', selectedFile);
        console.log(formdatas);
        try {
            const { data } = await addGraphic(formdatas, "graphicdesigning");

            if (data) {
                const tasks = originalTasks;
                tasks.push(data);
                alert("your data is submited you will be inform with in 24 hr thanks!")
            }
        } catch (error) {
            console.log(error);
            // setOpen(true);
            // setMessage({ text: "Error", error });
        }

        // You can perform form validation and submit data to the server here

    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;

    //     emailjs.sendForm('service_yqx6t8s', 'template_lsy4m4s', form, '_D8-Zzcad-BmexpHC')
    //         .then((response) => {
    //             console.log('Email sent successfully:', response);
    //             alert('Email sent successfully:')
    //         })
    //         .catch((error) => {
    //             console.error('Error sending email:', error);
    //         });

    // };
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
        const { name, value } = event.target;
        setHasDomain(value === 'yes');
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    return (
        <div className="form-container">
            {/* {window.open("https://docs.google.com/forms/d/e/1FAIpQLSevN4Y4Q1Ec_noPnnxiFzb8jPO2ZjEd9e_f4bXnrJ51BmbcfQ/viewform?usp=sf_link","_blank")} */}

            <h1 className="form-title"> Initail Requirement Form <br /> Graphic Design  </h1>
            <form onSubmit={handleSubmit} className="formseo">
                <div className='domian-div'>
                    <h3>Design Product</h3>
                    <div className='radio-graphic'>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="logo"
                                value="yes"
                                checked={hasDomain}
                                onChange={handleOptionChange}
                            />
                            <span >Logo</span>
                        </div>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="logo"
                                value="no"
                                checked={!hasDomain}
                                onChange={handleOptionChange}
                            />
                            <span >Poster</span>
                        </div>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="logo"
                                value="no"
                                checked={!hasDomain}
                                onChange={handleOptionChange}
                            />

                            <span >Brochure</span>
                        </div>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="logo"
                                value="no"
                                checked={!hasDomain}
                                onChange={handleOptionChange}
                            />

                            <span >Catalogue</span>
                        </div>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="logo"
                                value="no"
                                checked={!hasDomain}
                                onChange={handleOptionChange}
                            />

                            <span>Social Media Posts</span>
                        </div>
                        <div className='radio-btn-graphic'>
                            <input
                                type="radio"
                                name="logo"
                                value="no"
                                checked={!hasDomain}
                                onChange={handleOptionChange}
                            />

                            <span>Others</span>
                            <input
                                type="text"
                                id="desiredOutcomes"
                                name="other"
                                value={formData.other}
                                onChange={handleChange}
                                placeholder='here....'
                                className="form-input"

                            />
                        </div>


                    </div>
                </div>
                <div className='form-div'>

                    <label className="form-label">Dimensions:</label>
                    <div className="dimension">
                        <input
                            type="text"
                            id="desiredOutcomes"
                            name="font"
                            value={formData.font}
                            onChange={handleChange}
                            placeholder='Fonts'
                            className="form-input"

                        />
                        <input
                            type="text"
                            id="desiredOutcomes"
                            name="size"
                            placeholder='Sizes'
                            value={formData.size}
                            onChange={handleChange}
                            className="form-input"

                        />
                        <input
                            type="text"
                            id="desiredOutcomes"
                            name="style"
                            placeholder='Styles'
                            value={formData.style}
                            onChange={handleChange}
                            className="form-input"

                        />
                    </div>


                </div>
                <h2>Project Objectives:</h2>
                <div className='form-div'>
                    <label className="form-label">Target Audience:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="targetaudience"
                        value={formData.targetaudience}
                        onChange={handleChange}
                        className="form-input"

                    />

                </div>
                <div className='form-div'>
                    <label className="form-label"> Purpose:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="Purpose"
                        value={formData.Purpose}
                        onChange={handleChange}
                        className="form-input"
                        placeholder=' Message/Feeling to Convey'

                    />

                </div>
                <div className='form-div'>
                    <label className="form-label">  Key Information to Include:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="KeyInformationtoInclude"
                        value={formData.KeyInformationtoInclude}
                        onChange={handleChange}
                        className="form-input"

                    />

                </div>

                <div className='form-div'>

                    <label className="form-label"> Call to Action  :</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="CalltoAction"
                        value={formData.CalltoAction}
                        onChange={handleChange}
                        placeholder='(if applicable)'
                        className="form-input"

                    />
                </div>
                <h2> Design Inspiration</h2>
                <div className='form-div'>
                    <label className="form-label">Reference Designs/Images (Attach files or provide links):</label>

                    <input type="file" onChange={handleFileChange} ></input>
                    {selectedFile && <p> {selectedFile.name}</p>}
                </div>
                <h2>Additional Information:</h2>
                <div className='form-div'>

                    <label className="form-label">Design Style Preferences:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="DesignStylePreferences"
                        value={formData.DesignStylePreferences}
                        onChange={handleChange}
                        className="form-input"
                        placeholder='(Minimalist, Vintage, Modern, etc.)'

                    />
                </div>


                <div className='form-div'>

                    <label className="form-label"> Any Other Specific Requirements:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="AnyOtherSpecificRequirements"
                        value={formData.AnyOtherSpecificRequirements}
                        onChange={handleChange}
                        className="form-input"

                    />
                </div>
                <h2> Delivery Information:</h2>
                <div className='form-div'>
                    <label className="form-label">Preferred File Format (JPEG, PNG, PDF, etc.):</label>

                    <input type="file" onChange={handleFileChange} ></input>
                    {selectedFile && <p> {selectedFile.name}</p>}
                </div>

                <div className='form-div'>

                    <label className="form-label"> Delivery Method :</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="DeliveryMethod"
                        value={formData.DeliveryMethod}
                        onChange={handleChange}
                        placeholder='(Email, Cloud Storage, etc.)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>

                    <label className="form-label"> Drop Box insert here:</label>
                    <input
                        type="text"
                        id="desiredOutcomes"
                        name="DropBoxinserthere"
                        value={formData.DropBoxinserthere}
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
