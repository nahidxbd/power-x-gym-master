import React, { useEffect } from 'react';
import ClientFeedbackDetails from './ClientFeedbackDetails';
import './ClientFeedback.css';
import { useState } from 'react';
const ClientFeedbacks = () => {
    
    
    const [feedBack, setFeedBack] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/seeReview')
            .then(res => res.json())
            .then(data => setFeedBack(data))
    }, [])
    return (
        <div className="container feedback mt-5">
            <h3 style={{ color: ' #171B4E' }} className='font-weight-bold text-center'>
                Clients <span className="text-success"> Feedback</span>
            </h3>
            <div className="row mt-5">
                {
                    feedBack.map(feedback =>
                        <ClientFeedbackDetails feedback={feedback}
                            key={feedback._id}></ClientFeedbackDetails>)
                }
            </div>
        </div>
    );
};

export default ClientFeedbacks;