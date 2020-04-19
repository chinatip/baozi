import React from 'react';
import { parse } from './parser';

export const VocabList = () => {
    const { group, lesson } = parse();

    return (
        <div className="Vocab__Container">
            { lesson.map(i => {
                return (
                    <div className="Vocab__Group">
                        <span className="Vocab__GroupNumber">{i}</span>
                        {renderGroup(i, group[i])}
                    </div>
                );
            })}
        </div>
    )
};

const renderGroup = (groupNumber, group) => {
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