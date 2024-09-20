import React, { useEffect } from 'react';
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css'; // Import odometer CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faSmile, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const FunFacts = () => {
    useEffect(() => {
        const odometers = document.querySelectorAll('.odometer');
        odometers.forEach((odometer) => {
            const count = odometer.getAttribute('data-count');
            const od = new Odometer({
                el: odometer,
                format: '(,ddd)', // Use comma as thousand separator
                duration: 2000, // Duration of animation in milliseconds
            });
            od.update(count);
        });
    }, []);

    return (
        <section className="text-white py-16" style={{ background: "#e1b54e" }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="fun-fact-card flex flex-col items-center text-center">
                        <div className="text-4xl font-semibold mb-2">
                            <span className="odometer" data-count="350">00</span>+
                        </div>
                        <p className="text-lg font-medium">Successful Projects</p>
                        <FontAwesomeIcon icon={faClipboardCheck} className="text-4xl mt-4" />
                    </div>

                    <div className="fun-fact-card flex flex-col items-center text-center">
                        <div className="text-4xl font-semibold mb-2">
                            <span className="odometer" data-count="200">00</span>+
                        </div>
                        <p className="text-lg font-medium">Satisfied Clients</p>
                        <FontAwesomeIcon icon={faSmile} className="text-4xl mt-4" />
                    </div>

                    <div className="fun-fact-card flex flex-col items-center text-center">
                        <div className="text-4xl font-semibold mb-2">
                            <span className="odometer" data-count="180">00</span>+
                        </div>
                        <p className="text-lg font-medium">Expert Team Members</p>
                        <FontAwesomeIcon icon={faUsers} className="text-4xl mt-4" />
                    </div>

                    <div className="fun-fact-card flex flex-col items-center text-center">
                        <div className="text-4xl font-semibold mb-2">
                            <span className="odometer" data-count="35">00</span>+
                        </div>
                        <p className="text-lg font-medium">Years of Expertise</p>
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl mt-4" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FunFacts;


// import React, { useEffect } from 'react';
// import Odometer from 'odometer';
// import 'odometer/themes/odometer-theme-default.css'; // Import odometer CSS
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClipboardCheck, faSmile, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// const FunFacts = () => {
//     useEffect(() => {
//         const odometers = document.querySelectorAll('.odometer');
//         odometers.forEach((odometer) => {
//             const count = odometer.getAttribute('data-count');
//             const od = new Odometer({
//                 el: odometer,
//                 format: '(,ddd)', // Use comma as thousand separator
//                 duration: 2000, // Duration of animation in milliseconds
//             });
//             od.update(count);
//         });
//     }, []);

//     return (
//         <section className=" text-white py-16 black" style={{
//             background:"#e1b54e "
//         }} >
//             <div className="container mx-auto px-4">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" >
//                     <div className="flex flex-col items-center text-center" >
//                         <div className="text-4xl font-semibold mb-2">
//                             <span className="odometer" data-count="350">00</span>+
//                         </div>
//                         <p className="text-lg font-medium text-white">Successful Projects</p>
//                         <FontAwesomeIcon icon={faClipboardCheck} className="text-4xl mt-4" />
//                     </div>

//                     <div className="flex flex-col items-center text-center">
//                         <div className="text-4xl font-semibold mb-2">
//                             <span className="odometer" data-count="200">00</span>+
//                         </div>
//                         <p className="text-lg font-medium text-white">Satisfied Clients</p>
//                         <FontAwesomeIcon icon={faSmile} className="text-4xl mt-4" />
//                     </div>

//                     <div className="flex flex-col items-center text-center">
//                         <div className="text-4xl font-semibold mb-2">
//                             <span className="odometer" data-count="180">00</span>+
//                         </div>
//                         <p className="text-lg font-medium text-white">Expert Team Members</p>
//                         <FontAwesomeIcon icon={faUsers} className="text-4xl mt-4" />
//                     </div>

//                     <div className="flex flex-col items-center text-center">
//                         <div className="text-4xl font-semibold mb-2">
//                             <span className="odometer" data-count="35">00</span>+
//                         </div>
//                         <p className="text-lg font-medium text-white">Years of Expertise</p>
//                         <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl mt-4" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default FunFacts;
