import React from 'react';

const YouTubeEmbed = (props) => {
    const {embedId} = props;
    return (
        <div className="aspect-w-16 aspect-h-9 mt-4 md:mt-8">
            <iframe
                className="w-full h-[300px] md:h-[500px]"
                src={`https://www.youtube.com/embed/${embedId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;