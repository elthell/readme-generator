// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';

  if (license) {
    licenseBadge = `![${license} badge](https://img.shields.io/badge/License:-${license}-blue)`;
  };

  return licenseBadge;
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';

  // all license links
  if (license === 'GNU AGPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
  if (license === 'GNU GPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (license === 'GNU LGPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  };
  if (license === 'Mozilla Public License 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (license === 'Apache License 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (license === 'MIT License') {
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (license === 'Boost Software License 1.0') {
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  if (license === 'The Unlicense') {
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };

  return licenseLink;
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string --> if/else statement in markdown generator
function renderLicenseSection(license) {
  `## License
  
  This application has the ${license}.`
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let userLicense = data.license

  let newMarkdown = 
    `# ${data.title}

    ## Description`
    renderLicenseBadge(userLicense)

    `${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Credits

    ${data.credits}`;

    if (userLicense) {
      renderLicenseSection(userLicense);

    } else newMarkdown +=
      `## License
      
      N/A`;

  return newMarkdown;
}

module.exports = generateMarkdown;
