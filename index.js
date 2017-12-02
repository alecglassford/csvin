import fs from 'fs';

import { csvParse } from 'd3-dsv';

export default function (csvPath, rowParser) {
  const str = fs.readFileSync(csvPath, 'utf-8');
  return csvParse(str, rowParser);
}
