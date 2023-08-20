import React, { Fragment, useState } from 'react'
import './Index.css'
import {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
} from "../services/TaskServices";
import SeoPage from './SeoPage';
import { Link } from 'react-router-dom';
const Index = () => {
    const [formData, setFormData] = useState({
        websiteName: '',
        websiteURL: '',
        websitedes: '',
        CurrentWebsiteTraffic: '',
        CurrentKeywordRankings: '',
        PreviousSEOEfforts: '',
        TargetAudience: '',
        PrimaryKeywords: '',
        SecondaryKeywords: '',
        LongTailKeywords: '',
        DesignStylePreferences: '',
        AnyOtherSpecificRequirements: '',
        KeyCompetitorsStrengthsandWeaknesses: '',
        CompetitorWebsites: '',

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
    const [tasks, setTasks] = useState([]);
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = tasks;
        try {
            const { data } = await addTask({
                // _id: id,

                websiteName: formData.websiteName,
                websiteURL: formData.websiteURL,
                websitedes: formData.websitedes,
                CurrentWebsiteTraffic: formData.CurrentWebsiteTraffic,
                CurrentKeywordRankings: formData.CurrentKeywordRankings,
                PreviousSEOEfforts: formData.PreviousSEOEfforts,
                TargetAudience: formData.TargetAudience,
                PrimaryKeywords: formData.PrimaryKeywords,
                SecondaryKeywords: formData.SecondaryKeywords,
                LongTailKeywords: formData.LongTailKeywords,
                DesignStylePreferences: formData.DesignStylePreferences,
                AnyOtherSpecificRequirements: formData.AnyOtherSpecificRequirements,
                KeyCompetitorsStrengthsandWeaknesses: formData.KeyCompetitorsStrengthsandWeaknesses,

            }, "seo");

            if (data) {
                const tasks = originalTasks;
                tasks.push(data);
                alert("your data is submited you will be inform with in 24 hr thanks!")
                // setName("");
                // setTasks("");
                // setAssigne("");
                // setDate("");
                // setTime("");
                // setDueDate("");
                // setDueTime("");
                // setId("");
                // setOpen(true);
                // setMessage({ text: "Updated successfully ", type: "success" });
            } else {
                alert("Error occure")
                // setOpen(true);
                // setMessage({ text: "Error", type: "danger" });
            }
            // if (id) {
            //     // handleDelete(id);
            //     const { data } = await addTask({
            //         // _id: id,
            //         name: name,
            //         assignee: assigne,
            //         date: date,
            //         time: time,
            //         duedate: Duedate,
            //         duetime: Duetime,
            //         name: formData.name,
            //         email: formData.email,
            //         domain: formData.domain,
            //         question: formData.question,
            //         description: formData.description,
            //         contactNumber: formData.contactNumber,
            //         selectedOption: formData.selectedOption,
            //         brandname: formData.brandname,
            //         websitetype: formData.websitetype,
            //         refrance: formData.refrance,
            //         Branddescription: formData.Branddescription,
            //         numberofpages: formData.numberofpages,
            //         servicefeature1: formData.servicefeature1,
            //         servicefeature2: formData.servicefeature2,
            //         servicefeature3: formData.servicefeature3,
            //         Dycompanybriefly: formData.Dycompanybriefly,

            //         WebsitesUnderDomain: formData.WebsitesUnderDomain,
            //         domianname: formData.domianname,
            //         hostservice: formData.hostservice,
            //         representyourbrand: formData.representyourbrand,
            //         contentwesite: formData.contentwesite,
            //         webimge: formData.webimge,
            //         additionalreq: formData.additionalreq
            //     });

            //     if (data) {
            //         const tasks = originalTasks;
            //         tasks.push(data);
            //         setName("");
            //         setTasks("");
            //         setAssigne("");
            //         setDate("");
            //         setTime("");
            //         setDueDate("");
            //         setDueTime("");
            //         setId("");
            //         setOpen(true);
            //         setMessage({ text: "Updated successfully ", type: "success" });
            //     } else {
            //         setOpen(true);
            //         setMessage({ text: "Error", type: "danger" });
            //     }
            // } else {
            //     const { data } = await addTask({
            //         name: name,
            //         assignee: assigne,
            //         date: date,
            //         time: time,
            //         duedate: Duedate,
            //         duetime: Duetime,
            //     });
            //     if (data) {
            //         const tasks = originalTasks;
            //         tasks.push(data);
            //         setName("");
            //         setTasks("");
            //         setAssigne("");
            //         setDate("");
            //         setTime("");
            //         setDueDate("");
            //         setDueTime("");
            //         setOpen(true);
            //         setOpen(true);
            //         setMessage({ text: "Save successfully ", type: "success" });
            //     } else {
            //         setOpen(true);
            //         setMessage({ text: "Error", type: "danger" });
            //     }
            // }
        } catch (error) {
            console.log(error);
            // setOpen(true);
            // setMessage({ text: "Error", error });
        }

        // You can perform form validation and submit data to the server here
        console.log(formData);
    };

    return (
        <Fragment>
            {/* <SeoPage/> */}
            <div className="form-container">
                {/* {window.location.href = " https://docs.google.com/forms/d/e/1FAIpQLSezCEmhWWbLwH0xpZH-CrTUnsXvLUw55AUB9s8okm0wUPTtJA/viewform?usp=sf_link"} */}
                {/* {window.open("https://docs.google.com/forms/d/e/1FAIpQLSezCEmhWWbLwH0xpZH-CrTUnsXvLUw55AUB9s8okm0wUPTtJA/viewform?usp=sf_link", "_blank")} */}

                <h1 className="form-title">SEO Requirement Form!</h1>
                <form onSubmit={handleSubmit} className="formseo">
                    <h2>Project Objectives:</h2>
                    <div className='form-div'>
                        <label className="form-label">Project Name/Title:</label>
                        <input
                            type="text"
                            id="websiteName"
                            name="websiteName"
                            value={formData.websiteName}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />

                    </div>
                    <div className='form-div'>
                        <label className="form-label"> Website URL:</label>
                        <input
                            type="text"
                            id="websiteURL"
                            name="websiteURL"
                            value={formData.websiteURL}
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
                            id="websitedes"
                            name="websitedes"
                            value={formData.websitedes}
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
                            id="CurrentWebsiteTraffic"
                            name="CurrentWebsiteTraffic"
                            value={formData.CurrentWebsiteTraffic}
                            onChange={handleChange}
                            placeholder=' (if known)'
                            className="form-input"

                        />
                    </div>
                    <div className='form-div'>
                        <label className="form-label">Current Keyword Rankings:</label>
                        <input
                            type="text"
                            id="CurrentKeywordRankings"
                            name="CurrentKeywordRankings"
                            value={formData.CurrentKeywordRankings}
                            onChange={handleChange}
                            placeholder=' (if known)'
                            className="form-input"

                        />
                    </div>
                    <div className='form-div'>
                        <label className="form-label">Previous SEO Efforts:</label>
                        <input
                            type="text"
                            id="PreviousSEOEfforts"
                            name="PreviousSEOEfforts"
                            value={formData.PreviousSEOEfforts}
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
                            id="TargetAudience"
                            name="TargetAudience"
                            value={formData.TargetAudience}
                            onChange={handleChange}
                            placeholder='(Demographics, Geographical Area)'
                            className="form-input"

                        />
                    </div>
                    <div className='form-div'>
                        <label className="form-label">Primary Keywords:</label>
                        <input
                            type="text"
                            id="PrimaryKeywords"
                            name="PrimaryKeywords"
                            value={formData.PrimaryKeywords}
                            onChange={handleChange}
                            placeholder=' (if known)'
                            className="form-input"

                        />
                    </div>
                    <div className='form-div'>
                        <label className="form-label">Secondary Keywords:</label>
                        <input
                            type="text"
                            id="SecondaryKeywords"
                            name="SecondaryKeywords"
                            value={formData.SecondaryKeywords}
                            onChange={handleChange}
                            placeholder=' (if any)'
                            className="form-input"

                        />
                    </div>
                    <div className='form-div'>
                        <label className="form-label">Long-Tail Keywords :</label>
                        <input
                            type="text"
                            id="LongTailKeywords"
                            name="LongTailKeywords"
                            value={formData.LongTailKeywords}
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
                            id="DesignStylePreferences"
                            name="DesignStylePreferences"
                            value={formData.DesignStylePreferences}
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
                            id="DesignStylePreferences"
                            name="DesignStylePreferences"
                            value={formData.DesignStylePreferences}
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
                            id="CompetitorWebsites"
                            name="CompetitorWebsites"
                            value={formData.CompetitorWebsites}
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
                            id="KeyCompetitorsStrengthsandWeaknesses"
                            name="KeyCompetitorsStrengthsandWeaknesses"
                            value={formData.KeyCompetitorsStrengthsandWeaknesses}
                            onChange={handleChange}
                            className="form-input"

                        />
                    </div>
                    <div className='seo-button'>
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                    <Link to='/services'>Do you Want more Services?</Link>
                </form>
            </div>
        </Fragment>

    );
};

export default Index
