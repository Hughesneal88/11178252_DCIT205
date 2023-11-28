import React from 'react';
import { Link } from 'react-router-dom';

const FacultyPage = () => {
    return (
        <div className="faculty-page">
            <h1>Computer Science Department Faculty</h1>
            <div className="faculty-member">
                <img src="faculty1.jpg" alt="faculty member 1" />
                <h2>Mark Atta Mensah</h2>
                <h3>Chief Professor</h3>
                <p>
                    <Link to="/faculty/abimbola-akinkunmi">View Profile</Link>
                </p>
            </div>
            <div className="faculty-member">
                <img src="faculty2.jpg" alt="faculty member 2" />
                <h2>Mohammed Aziz</h2>
                <h3>Senior Lecturer</h3>
                <p>
                    <Link to="/faculty/victoria-idukwu">View Profile</Link>
                </p>
            </div>
            {/* Add more faculty members */}
        </div>
    );
};

export default FacultyPage;