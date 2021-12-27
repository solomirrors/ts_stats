import * as Papa from "papaparse";
import {useState} from "react";

const csvUrlParser = async (csvUrl: string) => {
    return new Promise(function (resolve) {
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