import React, { useState } from 'react'
import './Index.css'
import {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
} from "../services/TaskServices";
const Index = () => {
    const [formData, setFormData] = useState({
        websiteName: '',
        websitedes: '',
        DomainNamePreference: '',
        DomainExtension: '',
        AdditionalDomainNames: '',
        DomainPrivacyProtection: '',
        HostingType: '',
        StorageSpaceNeeded: '',
        BandwidthTransferLimit: '',
        OperatingSystemPreference: '',
        ControlPanelPreference: '',
        WebsitePlatformCMS: '',
        DatabaseRequirements: '',
        EmailHostingRequirements: '',
        SSLCertificateNeeded: '',
        ContentMigrationTransfer: '',
        BackupandRestoreServices: '',

    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [tasks, setTasks] = useState([]);
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = tasks;
        try {
            const { data } = await addTask({
                // _id: id,

                websiteName: formData.websiteName,
                websitedes: formData.websitedes,
                DomainNamePreference: formData.DomainNamePreference,
                DomainExtension: formData.DomainExtension,
                AdditionalDomainNames: formData.AdditionalDomainNames,
                DomainPrivacyProtection: formData.DomainPrivacyProtection,
                HostingType: formData.HostingType,
                StorageSpaceNeeded: formData.StorageSpaceNeeded,
                BandwidthTransferLimit: formData.BandwidthTransferLimit,
                OperatingSystemPreference: formData.OperatingSystemPreference,
                ControlPanelPreference: formData.ControlPanelPreference,
                WebsitePlatformCMS: formData.WebsitePlatformCMS,
                DatabaseRequirements: formData.DatabaseRequirements,
                EmailHostingRequirements: formData.EmailHostingRequirements,
                SSLCertificateNeeded: formData.SSLCertificateNeeded,
                ContentMigrationTransfer: formData.ContentMigrationTransfer,
                BackupandRestoreServices: formData.BackupandRestoreServices,
            }, "domainhosting");

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


    return (
        <div className="form-container">
            {/* {window.open("https://docs.google.com/forms/d/e/1FAIpQLSf5t-w8IGcos3UFzwLaS_iCpjTgzF31A10BiMoVRJRAVUZ96g/viewform?usp=sf_link", "_blank")} */}

            <h1 className="form-title">Domian & Hosting  Requirement Form!</h1>
            <form onSubmit={handleSubmit} className="formseo">
                <h2>Project Details:</h2>
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
                    <label className="form-label"> Description of the Project and Hosting Requirements:</label>
                    <input
                        type="text"
                        id="websitedes"
                        name="websitedes"
                        value={formData.websitedes}
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
                        id="DomainNamePreference"
                        name="DomainNamePreference"
                        value={formData.DomainNamePreference}
                        onChange={handleChange}
                        placeholder=' (if known)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Domain Extension:</label>
                    <input
                        type="text"
                        id="DomainExtension"
                        name="DomainExtension"
                        value={formData.DomainExtension}
                        onChange={handleChange}
                        placeholder='(e.g-.com, .net, .org)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Additional Domain Names :</label>
                    <input
                        type="text"
                        id="AdditionalDomainNames"
                        name="AdditionalDomainNames"
                        value={formData.AdditionalDomainNames}
                        onChange={handleChange}
                        placeholder='(if needed)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Domain Privacy Protection:</label>
                    <input
                        type="text"
                        id="DomainPrivacyProtection"
                        name="DomainPrivacyProtection"
                        value={formData.DomainPrivacyProtection}
                        onChange={handleChange}
                        placeholder=' (Yes/No)'
                        className="form-input"

                    />
                </div>
                <h2>Hosting Requirements:</h2>
                <div className='form-div'>
                    <label className="form-label">Hosting Type :</label>
                    <input
                        type="text"
                        id="HostingType"
                        name="HostingType"
                        value={formData.HostingType}
                        onChange={handleChange}
                        placeholder='(Shared, VPS, Dedicated, Cloud, etc.)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Storage Space Needed:</label>
                    <input
                        type="text"
                        id="StorageSpaceNeeded"
                        name="StorageSpaceNeeded"
                        value={formData.StorageSpaceNeeded}
                        onChange={handleChange}
                        placeholder=' (if known)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Bandwidth/Transfer Limit:</label>
                    <input
                        type="text"
                        id="BandwidthTransferLimit"
                        name="BandwidthTransferLimit"
                        value={formData.BandwidthTransferLimit}
                        onChange={handleChange}
                        placeholder=' (if any)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Operating System Preference :</label>
                    <input
                        type="text"
                        id="OperatingSystemPreference"
                        name="OperatingSystemPreference"
                        value={formData.OperatingSystemPreference}
                        onChange={handleChange}
                        placeholder='(if applicable)'
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Control Panel Preference:</label>
                    <input
                        type="text"
                        id="ControlPanelPreference"
                        name="ControlPanelPreference"
                        value={formData.ControlPanelPreference}
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
                        id="WebsitePlatformCMS"
                        name="WebsitePlatformCMS"
                        value={formData.WebsitePlatformCMS}
                        onChange={handleChange}
                        className="form-input"
                        placeholder='(e.g., shopify, WordPress, Joomla, etc.)'
                        required
                    />
                </div>


                <div className='form-div'>

                    <label className="form-label"> Database Requirements :</label>
                    <input
                        type="text"
                        id="DatabaseRequirements"
                        name="DatabaseRequirements"
                        value={formData.DatabaseRequirements}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className='form-div'>

                    <label className="form-label"> Email Hosting Requirements:</label>
                    <input
                        type="text"
                        id="EmailHostingRequirements"
                        name="EmailHostingRequirements"
                        value={formData.EmailHostingRequirements}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className='form-div'>

                    <label className="form-label"> SSL Certificate Needed:</label>
                    <input
                        type="text"
                        id="SSLCertificateNeeded"
                        name="SSLCertificateNeeded"
                        value={formData.SSLCertificateNeeded}
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
                        id="ContentMigrationTransfer"
                        name="ContentMigrationTransfer"
                        value={formData.ContentMigrationTransfer}
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
                        id="BackupandRestoreServices"
                        name="BackupandRestoreServices"
                        value={formData.BackupandRestoreServices}
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
