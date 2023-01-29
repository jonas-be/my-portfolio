import React from 'react';

const LabelList = ({labels}: Props) => {
    return (
        <div className="flex gap-1 py-1">
            {labels.map(i =>
            <div key={i} className="p-0.5 px-2 rounded-full bg-accent text-xs text">{i}</div>
            )}
        </div>
    );
};

type Props = {
    labels: string[]
}

export default LabelList;
