import spreadsheet from '../data/chinese_vocab.xlsx';
import xlsx from 'xlsx';

export const parse = () => {
    try {
        const csvString = xlsx.utils.sheet_to_csv(spreadsheet.Sheets['vocab']);
        return formatData(csvString);
    } catch(ex) {
        console.log(ex);
    }
}

const formatData = (text) => {
    const json = text.split("\n");
    
    const vocabs = {
        list: [],
        group: {},
        lesson: [],
    };
    let lesson;
    json.forEach(x => {
        if (x.includes(",,")) {
            lesson = x.split(",,")[0];
            vocabs.group[lesson] = [];
            vocabs.lesson.push(lesson);
        }
        else {
            const row = x.split(',');
            vocabs.list.push({
                word: row[0],
                pinyin: row[1],
                definition: row[2],
                lesson,
            });
            vocabs.group[lesson].push({
                word: row[0],
                pinyin: row[1],
                definition: row[2],
            })
        }
    });
    window.vocabs = vocabs;

    return { ...vocabs };
}