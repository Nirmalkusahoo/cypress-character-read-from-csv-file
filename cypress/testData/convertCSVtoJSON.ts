import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'papaparse';

try {
  // File Path: here inside readFileSync method give your CSV file path
  const csvFile = readFileSync(
    './cypress/testData/BasicLatinFormatted.csv',
    'utf8'
  );
  const csvResults = parse(csvFile, {
    header: true,
    complete: (csvData) => csvData.data,
  }).data;
  console.log('csvResults are', csvResults);
  // File Path: here inside writeFileSync method give testData.json file path to where the formatted CSV data will be copied
  writeFileSync(
    './cypress/fixtures/testData.json',
    JSON.stringify(csvResults, null, 4),
    'utf-8'
  );
} catch (e) {
  throw Error(e);
}
