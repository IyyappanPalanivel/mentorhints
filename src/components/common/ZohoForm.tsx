import React from 'react';

const ZohoForm = (props) => {
    const { formLink } = props;
    return (
        <div>
            <iframe
                aria-label='Mentorhints'
                frameBorder="0"
                className="w-full h-[500px] rounded"
                src={formLink}>

            </iframe>
        </div>
    );
};

export default ZohoForm;