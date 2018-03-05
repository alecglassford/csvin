import fs from 'fs';

import { csvParse } from 'd3-dsv';

export default function (csvPath, rowParser) {
  const csvString = fs.readFileSync(csvPath, 'utf8');
  return csvParse(csvString, rowParser);
}
