import React from 'react';
import { parseBookData } from './Parser';

export const VocabList = () => {
    const { group, lesson } = parseBookData();

    return (
        <div className="VocabList">
            { lesson.map(i => {
                return (
                    <div className="Vocab">
                        <span className="Vocab__LessonNumber">{i}</span>
                        {renderGroup(group[i])}
                        <hr></hr>
                        <br></br>
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
            <div className="Vocab__Row--word VocabCol">{word}</div>
            <div className="Vocab__Row--pinyin VocabCol">{pinyin}</div>
            <div className="Vocab__Row--definition VocabCol">{definition}</div>
        </span>
    )
}

export default VocabList;