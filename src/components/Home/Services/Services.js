import React, { useEffect, useState } from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';

const Services = () => {
   
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/seeService")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <section className="services my-5">
            <div className="container">
                <div className="secction-header text-center mt-5">
                    <h1>Provide awesome <span className="text-success"> services</span></h1>
                </div>
                <div className="row mt-5">
                    {
                        service.map(service => <ServiceDetails
                            service={service}
                            key={service._id}
                        >

                        </ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;