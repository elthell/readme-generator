// TODO: Create a function to generate markdown for README
// moved all license generation into markdown generation for simplicity
function generateMarkdown(data) {
  // empty variables for license
  let userLicense = `${data.license}`;
  let licenseLink = "";
  let licenseBadge = "";

  // set link and badge by license selection
  if (userLicense === "GNU AGPLv3") {
    licenseLink = "https://choosealicense.com/licenses/agpl-3.0/";
    licenseBadge = "https://img.shields.io/badge/license-agpl_3.0-blue";
  }
  if (userLicense === "GNU GPLv3") {
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
    licenseBadge = "https://img.shields.io/badge/license-gpl_3.0-blue";
  }
  if (userLicense === "GNU LGPLv3") {
    licenseLink = "https://choosealicense.com/licenses/lgpl-3.0/";
    licenseBadge = "https://img.shields.io/badge/license-lgpl_3.0-blue";
  }
  if (userLicense === "Mozilla Public License 2.0") {
    licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
    licenseBadge = "https://img.shields.io/badge/license-mpl_2.0-blue";
  }
  if (userLicense === "Apache License 2.0") {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
    licenseBadge = "https://img.shields.io/badge/license-apache_2.0-blue";
  }
  if (userLicense === "MIT License") {
    licenseLink = "https://choosealicense.com/licenses/mit/";
    licenseBadge = "https://img.shields.io/badge/license-mit-blue";
  }
  if (userLicense === "Boost Software License 1.0") {
    licenseLink = "https://choosealicense.com/licenses/bsl-1.0/";
    licenseBadge = "https://img.shields.io/badge/license-bsl_1.0-blue";
  }
  if (userLicense === "The Unlicense") {
    licenseLink = "https://choosealicense.com/licenses/unlicense/";
    licenseBadge = "https://img.shields.io/badge/license-unlicense-blue";
  }

  // generate readme w/ markdown
  let newMarkdown = `# ${data.title}

  ## Description
  ![${userLicense} badge](${licenseBadge})

  ${data.description}

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

  ${data.credits}
    
  `;

  // license section if one was chosen
  if (userLicense) {
    newMarkdown += 
  `## License
  
  This application has the ${userLicense}.
      
  To learn more click here: ${licenseLink}.
  `;
  } else
    newMarkdown += 
  `## License
      
  N/A
  `;

  return newMarkdown;
}

module.exports = generateMarkdown;
