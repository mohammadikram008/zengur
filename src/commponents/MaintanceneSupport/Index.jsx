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
        websiteURL: '',
        websitedes: '',
        MaintenanceSchedule: '',
        PreferredMaintenance: '',
        EmergencySupport: '',
        PreferredMethodofContact: '',
        BestTimetoReachYou: '',
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
                MaintenanceSchedule: formData.MaintenanceSchedule,
                PreferredMaintenance: formData.PreferredMaintenance,
                EmergencySupport: formData.EmergencySupport,
                PreferredMethodofContact: formData.PreferredMethodofContact,
                BestTimetoReachYou: formData.BestTimetoReachYou,
            }, "maintancesupport");

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
        <div className="form-container">
            {/* {window.open("https://docs.google.com/forms/d/e/1FAIpQLSc9ugEvIXDjNdA7xUkOCFTSeJp4HeHU3P_ad6z8s4eo9DWmgg/viewform?usp=sf_link", "_blank")} */}

            <h1 className="form-title">Maintanenece & Support  Requirement Form!</h1>
            <form onSubmit={handleSubmit} className="formseo">
                <h2>Website Details:</h2>
                <div className='form-div'>
                    <label className="form-label">Website Name/Title:</label>
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

                        required
                    />

                </div>


                <div className='form-div'>
                    <label className="form-label"> Description of the Website :</label>
                    <textarea
                        id="websitedes"
                        name="websitedes"
                        value={formData.websitedes}
                        onChange={handleInputChange}
                        placeholder='Maintenance/Support Needs'

                    ></textarea>

                </div>
                <h2>Frequency and Timing::</h2>
                <div className='form-div'>
                    <label className="form-label">Maintenance Schedule :</label>
                    <input
                        type="text"
                        id="MaintenanceSchedule"
                        name="MaintenanceSchedule"
                        value={formData.MaintenanceSchedule}
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
                        id="PreferredMaintenance"
                        name="PreferredMaintenance"
                        value={formData.PreferredMaintenance}
                        onChange={handleChange}
                        className="form-input"
                        placeholder=''
                        required
                    />

                </div>

                <div className='form-div'>
                    <label className="form-label"> Emergency Support Availability:</label>
                    <input
                        type="text"
                        id="EmergencySupport"
                        name="EmergencySupport"
                        value={formData.EmergencySupport}
                        onChange={handleChange}
                        className="form-input"
                        placeholder=''

                    />

                </div>

                <h2>Communication Preferences:</h2>
                <div className='form-div'>

                    <label className="form-label">Preferred Method of Contact:</label>
                    <input
                        type="text"
                        id="PreferredMethodofContact"
                        name="PreferredMethodofContact"
                        value={formData.PreferredMethodofContact}
                        onChange={handleChange}
                        className="form-input"

                    />
                </div>
                <div className='form-div'>
                    <label className="form-label">Best Time to Reach You:</label>
                    <input
                        type="text"
                        id="BestTimetoReachYou"
                        name="BestTimetoReachYou"
                        value={formData.BestTimetoReachYou}
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
