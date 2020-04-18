import spreadsheet from '../data/chinese_vocab.xlsx';
import xlsx from 'xlsx';

export const getVocabs = () => {
    try {
        const csvString = xlsx.utils.sheet_to_csv(spreadsheet.Sheets['vocab']);
        return formatData(csvString);
    } catch(ex) {

        console.log(ex);
    }
}

const formatData = (text) => {
    const json = text.split("\n");
    
    let vocabs = [];
    let lesson; 
    json.forEach(x => {
        if (x.includes(",,")) {
            lesson = x[0];
        }
        else {
            const row = x.split(',');
            vocabs.push({
                vocab: row[0],
                pinyin: row[1],
                meaning: row[2],
                lesson,
            });
        }
    });

    window.vocabs = vocabs;
}