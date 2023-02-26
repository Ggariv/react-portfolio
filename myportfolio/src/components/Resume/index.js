import React from 'react';

function Resume() {
    return (
        <section>
            <h1 className="resume">My Resume</h1>
            <div className="row justify-content-center" id="resume">
                <div className="mt-5 pl-5 pr-5">
                Experienced multitasker with solid record of accomplishment in several departments, strategies and key projects. Experienced in financial reporting, project management, market research, deepening partnerships and boosting sales with creative and proactive approaches. Excellent reputation for strategic planning, problems solution, building long-term customer relationships and improving customer satisfaction. Enthusiastic for undertaking new challenges to grow, learn and adapt to new industries.
                <p className="mt-5"><a href="https://www.linkedin.com/in/gonzalogarciariv92/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="LinkedIn"/></a></p>
                <p>Download my full <a href="../assets/gonzalo-resume.pdf" className="link">resume</a></p>
                </div>
            </div>

            <div className="justify-content-center mt-5">
            <div id="front-back">
                <h2>Front-End Skills</h2>
                <p>HTML, CSS (Bootstrap, Tailwind), JavaScript, jQuery, React.js, IndexedDB</p>
            </div>
    
            <div id="front-back" className="mt-5">
                <h2>Back-End Skills</h2>
                <p>
                Node.js, Express.js, SQL, Sequelize, NoSQL (MongoDB, Mongoose), APIs
                </p>
            </div>
        </div>
        </section>
        )
    }

export default Resume;