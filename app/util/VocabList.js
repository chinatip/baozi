import React from 'react';
import { parseBookData } from './Parser';

export const VocabList = () => {
    const { group, lesson } = parseBookData();

    return (
        <div className="Vocab__Container">
            { lesson.map(i => {
                return (
                    <div className="Vocab__Group">
                        <span className="Vocab__GroupNumber">{i}</span>
                        {renderGroup(group[i])}
                    </div>
                );
            })}
        </div>
    )
};

const renderGroup = (group) => {
    return group.map(x => renderRow(x));
}

const renderRow = ({ word, pinyin, definition, lesson }) => {
    return (
        <span className="Vocab__Row">
            {word}
        </span>
    )
}

export default VocabList;