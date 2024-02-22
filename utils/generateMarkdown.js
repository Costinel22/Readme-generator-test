// function to generate markdown for README
const licenseLinks = {
    'MIT': 'https://lbesson.mit-license.org/',
    'MPL 2.0': 'https://opensource.org/licenses/MPL-2.0/',
    'ODC BY': `https://opendatacommons.org/licenses/by/`,
    'ODbl': "https://opendatacommons.org/licenses/odbl/",
};
const licenseBadge = (license) => {
    return license ? licenseLinks[license] : '';
}
const licenses = (license) => {
    return `${license}`
}
var generateMarkdown = (data) => {
    return `# ${data.title}

    ${licenseBadge(data.license)}
## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenses(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have some questions, please use the following contact options!

  * GitHub user name:[${data.userName}](https://www.github.com/${data.userName})
  * Contact Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;