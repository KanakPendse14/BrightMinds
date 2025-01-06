
// import React from 'react';

// const ListeningSkillsset = ({ title, description }) => {
//     return (
//         <div className="course-block">
//             <h2>{title}</h2>
//             <p>{description}</p>
//             <button onClick={() => alert(`Starting course: ${title}`)}>Start Course</button>
//         </div>
//     );
// };

// export default ListeningSkillsset;


// src/components/ListeningSkillsset.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListeningSkillsset = ({ title, description, path }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the course page
        navigate(path);
    };

    return (
        <div className="course-block">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={handleClick}>Start </button>
        </div>
    );
};

export default ListeningSkillsset;