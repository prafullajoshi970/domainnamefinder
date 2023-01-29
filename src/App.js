import React, { useState } from 'react';

function DomainGenerator() {
  const [keyword, setKeyword] = useState('');
  const [domains, setDomains] = useState([]);
  var url = "https://www.namecheap.com/domains/registration/results/?domain="

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const generateDomains = () => {
    setDomains([
      `love${keyword}`, `world${keyword}`, `blog${keyword}`, `low${keyword}`, `msg${keyword}.inclick`, `hello${keyword}.io`, `top${keyword}.in`,
      `${keyword}.instart`, `${keyword}.inspot`, `${keyword}.inshift`, `On${keyword}.in`, `${keyword}.inware`, `${keyword}.inpress`, `${keyword}.org`,
      `${keyword}.inscan`, `${keyword}.inbase`, `${keyword}.inpush`, `${keyword}.inrise`, `jump${keyword}.io`, `${keyword}.ingram`, `${keyword}.incast`,
      `${keyword}.insync`, `${keyword}.inture`, `${keyword}.inmode`, `${keyword}.inspace`, `Agro${keyword}.org`, `Live${keyword}.io`, `${keyword}.inflow`, `peak${keyword}.in`,
      `${keyword}.inspan`, `${keyword}.iness`, `${keyword}.invibe`, `${keyword}.inport`, `${keyword}.inclick`, `${keyword}.inup`, `${keyword}.intype`,

      `one${keyword}`, `up${keyword}`, `pro${keyword}`, `legend${keyword}`, `awesome${keyword}`, `target${keyword}`, `base${keyword}`, `high${keyword}`, `boom${keyword}`
    ]);
  };

  return (
    <div className='allcontent'>
      <h1>Domain Search!</h1>
      <div className='main'>

        <input type="text" value={keyword} onChange={handleKeywordChange} />
        <button onClick={generateDomains}>Generate Domains</button>

      </div>

      <div className='data'>
        <ul>
          {domains.map((domain, index) => (
            <li><a key={index} href={`${url}${domain}`} placeholder>{domain}</a></li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default DomainGenerator;
