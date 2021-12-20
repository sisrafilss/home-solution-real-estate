import React from 'react';

const SectionHead = ({sectionHead}) => {
    const { title, subTitle } = sectionHead;
    return (
        <div style={{ marginTop: '100px' }} className="text-center mb-5">
            <h2 className="display-5 fw-bold">{title}</h2>
            <p className="lead"> {subTitle} </p>
        </div>
    );
};

export default SectionHead;