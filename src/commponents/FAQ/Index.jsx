import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './Index.css'
const Index = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const faqData = [
        {
            question: 'What is web development and design?',
            answer: 'Web development and design encompass the creation and design of websites or web applications. Development involves coding, programming, and server-side work, while design focuses on the visual layout, user interface (UI), and user experience (UX) of the site.',
        },
        {
            question: 'Why do I need a professional web development and design service?',
            answer: 'Engaging a professional service like Zengur ensures your website is built with expertise, adheres to best practices, is visually appealing, user- friendly, and functional across various devices and browsers.We can assist you in achieving your business goals and establishing a robust online presence.',
        },
        {
            question: ' What is the typical process for a web development and design project?',
            answer: 'The typical process involves stages such as discovery and planning, design mockups or wireframes, development and coding, testing, client feedback, revisions, and ultimately, the websites launch.The specific steps may vary based on the project scope and the level of client interaction.',
        },
        {
            question: 'How long does it take to complete a web development project?',
            answer: 'Project duration varies depending on factors such as project complexity, required features, and collaboration efficiency. While a simple website might take a few weeks, a more intricate web application could extend over several months.',
        },
        {
            question: 'What is responsive design, and why is it important?',
            answer: 'Responsive design ensures optimal website appearance and functionality across diverse screen sizes, from desktop monitors to mobile devices. Its importance lies in providing a consistent user experience and enhancing search engine rankings.',
        },
        // Add more FAQ items as needed
    ];
    return (
        <div className="faq-section">
            <h2 className="faq-title">FAQ</h2>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="question" onClick={() => handleToggle(index)}>
                            <span className="question-text">{item.question}</span>
                            <button className="toggle-button">
                                {activeIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </button>
                        </div>
                        {activeIndex === index && (
                            <div className="answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>



    )
}

export default Index
