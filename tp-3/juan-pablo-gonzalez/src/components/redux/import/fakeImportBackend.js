// This an emulation on the dynamics on the components, like if the import is running
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line
const rowsPerMin = [];
let rowsPerMinTotal = 0;
let rowsPerMinAvg = 0;

let importProgressResponse = {
  recipient: {
    percentage: 0,
    accepted: 0,
    warnings: 0,
    errors: 0,
    rejected: 0,
    waiting: true
  },
  form: {
    percentage: 0,
    accepted: 0,
    rejected: 0,
    errors: 0,
    warnings: 0,
    waiting: true,
  },
  stats: {
    rowsPerMinute: 0,
    rowsComplete: 0,
    timeToComplete: '45s'
  }
};

let importErrorDetails = {};

const importHistoryResponse = [
  { name: 'ContractorADP', types: ['1099-Misc'], status: 'Importing' },
  { name: 'Peoplesoft 1099-Misc', types: ['1099-Misc'], status: 'Waiting' },
  { name: '1099-int', types: ['1099-Int'], status: 'Waiting' },
  { name: 'ContractorSovos', types: ['Recip'], accepted: 10253, rejected: 29, errors: 57, warnings: 126, status: 'Tested' },
  { name: '1099-Misc', types: ['1099-Misc'], accepted: 2225, rejected: 0, errors: 0, warnings: 157, status: 'Imported' },
  { name: '1099-Div', types: ['1099-Div'], accepted: 2015, rejected: 0, errors: 0, warnings: 63, status: 'Imported' },
  { name: 'ContractorADP', types: ['1099-Misc'], status: 'Waiting' },
  { name: 'Peoplesoft 1099-Misc', types: ['1099-Misc'], status: 'Waiting' },
  { name: '1099-int', types: ['1099-Int'], status: 'Waiting' },
  { name: 'ContractorSovos', types: ['Recip'], accepted: 10253, rejected: 29, errors: 57, warnings: 126, status: 'Tested' },
  { name: '1099-Misc', types: ['1099-Misc'], accepted: 2225, rejected: 0, errors: 0, warnings: 157, status: 'Imported' },
  { name: '1099-Div', types: ['1099-Div'], accepted: 2015, rejected: 0, errors: 0, warnings: 63, status: 'Imported' },
  { name: 'ContractorADP', types: ['1099-Misc'], status: 'Waiting' },
  { name: 'Peoplesoft 1099-Misc', types: ['1099-Misc'], status: 'Waiting' },
  { name: '1099-int', types: ['1099-Int'], status: 'Waiting' },
  { name: 'ContractorSovos', types: ['Recip'], accepted: 10253, rejected: 29, errors: 57, warnings: 126, status: 'Tested' },
  { name: '1099-Misc', types: ['1099-Misc'], accepted: 2225, rejected: 0, errors: 0, warnings: 157, status: 'Imported' },
  { name: '1099-Div', types: ['1099-Div'], accepted: 2015, rejected: 0, errors: 0, warnings: 63, status: 'Imported' },
  { name: 'ContractorADP', types: ['1099-Misc'], status: 'Waiting' },
  { name: 'Peoplesoft 1099-Misc', types: ['1099-Misc'], status: 'Waiting' },
  { name: '1099-int', types: ['1099-Int'], status: 'Waiting' },
  { name: 'ContractorSovos', types: ['Recip'], accepted: 10253, rejected: 29, errors: 57, warnings: 126, status: 'Tested' },
  { name: '1099-Misc', types: ['1099-Misc'], accepted: 2225, rejected: 0, errors: 0, warnings: 157, status: 'Imported' },
  { name: '1099-Div', types: ['1099-Div'], accepted: 2015, rejected: 0, errors: 0, warnings: 63, status: 'Imported' },
  { name: 'ContractorADP', types: ['1099-Misc'], status: 'Waiting' },
  { name: 'Peoplesoft 1099-Misc', types: ['1099-Misc'], status: 'Waiting' },
  { name: '1099-int', types: ['1099-Int'], status: 'Waiting' },
  { name: 'ContractorSovos', types: ['Recip'], accepted: 10253, rejected: 29, errors: 57, warnings: 126, status: 'Tested' },
  { name: '1099-Misc', types: ['1099-Misc'], accepted: 2225, rejected: 0, errors: 0, warnings: 157, status: 'Imported' },
  { name: '1099-Div', types: ['1099-Div'], accepted: 2015, rejected: 0, errors: 0, warnings: 63, status: 'Imported' },
  { name: 'ContractorADP', types: ['1099-Misc'], status: 'Waiting' },
  { name: 'Peoplesoft 1099-Misc', types: ['1099-Misc'], status: 'Waiting' },
  { name: '1099-int', types: ['1099-Int'], status: 'Waiting' },
  { name: 'ContractorSovos', types: ['Recip'], accepted: 10253, rejected: 29, errors: 57, warnings: 126, status: 'Tested' },
  { name: '1099-Misc', types: ['1099-Misc'], accepted: 2225, rejected: 0, errors: 0, warnings: 157, status: 'Imported' },
  { name: '1099-Div', types: ['1099-Div'], accepted: 2015, rejected: 0, errors: 0, warnings: 63, status: 'Imported' },
  { name: 'ContractorADP', types: ['1099-Misc'], status: 'Waiting' },
  { name: 'Peoplesoft 1099-Misc', types: ['1099-Misc'], status: 'Waiting' },
  { name: '1099-int', types: ['1099-Int'], status: 'Waiting' },
  { name: 'ContractorSovos', types: ['Recip'], accepted: 10253, rejected: 29, errors: 57, warnings: 126, status: 'Tested' },
  { name: '1099-Misc', types: ['1099-Misc'], accepted: 2225, rejected: 0, errors: 0, warnings: 157, status: 'Imported' },
  { name: '1099-Div', types: ['1099-Div'], accepted: 2015, rejected: 0, errors: 0, warnings: 63, status: 'Imported' }
];

export function simulateImportHistoryBackend() {
  return importHistoryResponse;
}

export function resetImportBackend() {
  importProgressResponse = {
    recipient: {
      percentage: 0,
      accepted: 0,
      warnings: 0,
      errors: 0,
      rejected: 0,
      waiting: true
    },
    form: {
      percentage: 0,
      accepted: 0,
      rejected: 0,
      errors: 0,
      warnings: 0,
      waiting: true,
    },
    stats: {
      rowsPerMinute: 0,
      rowsComplete: 0,
      timeToComplete: '45s'
    }
  };
}

export function simulateImportProgressBackend() {
  if (importProgressResponse.recipient.percentage >= 100) {
    if (importProgressResponse.form.percentage < 100) {
      const processed = getRandomInt(43, 57);
      const percentageOfRejects = getRandomInt(0, 10) / 100;
      rowsPerMin.push(processed * 2 * 60);
      rowsPerMinTotal += rowsPerMin[rowsPerMin.length - 1];
      rowsPerMinAvg = Math.floor(rowsPerMinTotal / rowsPerMin.length);
      const rejected = getRandomInt(0, processed * percentageOfRejects);
      const errors = getRandomInt(rejected * 0.5, rejected * 0.8);
      importProgressResponse.form.waiting = false;
      importProgressResponse.form.percentage += 4;
      importProgressResponse.form.accepted += processed - rejected;
      importProgressResponse.form.rejected += rejected;
      importProgressResponse.form.errors += errors;
      importProgressResponse.form.warnings += rejected - errors;
      importProgressResponse.stats.rowsPerMinute = rowsPerMinAvg;
      importProgressResponse.stats.rowsComplete += processed;
    }
  } else {
    const processed = getRandomInt(38, 52);
    const percentageOfRejects = getRandomInt(0, 10) / 100;
    rowsPerMin.push(processed * 2 * 60);
    rowsPerMinTotal += rowsPerMin[rowsPerMin.length - 1];
    rowsPerMinAvg = Math.floor(rowsPerMinTotal / rowsPerMin.length);
    const rejected = getRandomInt(0, processed * percentageOfRejects);
    const errors = getRandomInt(rejected * 0.5, rejected * 0.8);
    importProgressResponse.recipient.waiting = false;
    importProgressResponse.recipient.percentage += 5;
    importProgressResponse.recipient.accepted += processed - rejected;
    importProgressResponse.recipient.rejected += rejected;
    importProgressResponse.recipient.errors += errors;
    importProgressResponse.recipient.warnings += rejected - errors;
    importProgressResponse.stats.rowsPerMinute = rowsPerMinAvg;
    importProgressResponse.stats.rowsComplete += processed;
  }
  return importProgressResponse;
}

export function fetchImportErrorSummary(formType) {
  const errorCount = importProgressResponse[formType].errors;
  let tinErrorCount = Math.round(Number(getRandomInt(errorCount * 0.4, errorCount * 0.6)));
  const invalidStateErrorCount = Math.round(Number(getRandomInt(errorCount * 0.2, errorCount * 0.3)));
  const invalidMailingStateErrorCount = Math.round(Number(errorCount - (tinErrorCount + invalidStateErrorCount)));
  tinErrorCount = tinErrorCount + invalidStateErrorCount + invalidMailingStateErrorCount > errorCount ? tinErrorCount - 1 : tinErrorCount;

  return {
    header: ['ERROR NAME', 'RECORDS', 'DESCRIPTION'],
    values: [
      {
        key: 'INVALID_TIN_FORMAT',
        title: 'Invalid TIN Format',
        records: tinErrorCount,
        description: 'TIN is not 9 digits'
      },
      {
        key: 'INVALID_STATE',
        title: 'Invalid State',
        records: invalidStateErrorCount,
        description: 'The format of the state field is not an accepted two-character code, i.e MN or CO'
      },
      {
        key: 'INVALID_MAILING_STATE',
        title: 'Invalid Mailing State',
        records: invalidMailingStateErrorCount,
        description: 'Address to be mailed to is different than the recipient\'s address printed on the form'
      }
    ]
  };
}

export function generateImportErrorData(error) {
  const possibleValues = [
    {
      tin: 'XXX-XX-5874',
      name: 'Hannah W. White',
      address: '3120 Reynolds Alley',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90017'
    }, {
      tin: 'XXX-XX-1599',
      name: 'Lisa G. Thompson',
      address: '4707 Colony Street',
      city: 'Stamford',
      state: 'CT',
      zip: '06995'
    }, {
      tin: 'XXX-XX-4646',
      name: 'Betty J. Meza',
      address: '2858 Memory Lane',
      city: 'Rockford',
      state: 'IL',
      zip: '61101'
    }, {
      tin: 'XXX-XX-4587',
      name: 'Matthew A. Perkins',
      address: '3798 West Fork Street',
      city: 'Great Falls',
      state: 'MT',
      zip: '59401'
    }, {
      tin: 'XXX-XX-0832',
      name: 'Sandy E. Hart',
      address: '3670 Henery Street',
      city: 'Indianapolis',
      state: 'IN',
      zip: '46234'
    }
  ];

  function generateRandomValues(count) {
    const values = [];
    for (let i = 0; i < count; i++) {
      const valueIndex = getRandomInt(0, possibleValues.length - 1);
      const value = Object.assign({}, possibleValues[valueIndex]);
      value.key = i;
      values.push(value);
    }
    return values;
  }

  importErrorDetails = {
    header: error.key === 'INVALID_TIN_FORMAT' ? ['TIN', 'NAME', 'ADDRESS', 'CITY', 'STATE', 'ZIP'] : [],
    values: generateRandomValues(error.records)
  };

  return importErrorDetails;
}

export function fetchImportErrorDetailsByPage(pageToFetch, recordsPerPage) {
  const initialRecord = pageToFetch === 1 ? 0 : ((pageToFetch - 1) * recordsPerPage);
  let finalRecord;
  if (pageToFetch === 1) {
    finalRecord = recordsPerPage;
  } else {
    finalRecord = ((pageToFetch) * recordsPerPage) > importErrorDetails.values.length ? importErrorDetails.values.length : ((pageToFetch) * recordsPerPage);
  }
  return {
    header: importErrorDetails.header,
    values: importErrorDetails.values.slice(initialRecord, finalRecord),
    total: importErrorDetails.values.length
  };
}
