import * as Papa from "papaparse";

const csvUrlParser = async (csvUrl: string) => {
    return new Promise((resolve) => {
        Papa.parse(csvUrl, {
            download: true,
            complete: (results) => {
                resolve(results.data)
            }
        });
    }).then((value) => {
        return value
    })
    .catch((error) => {
        return error;
    });
}

export default csvUrlParser;