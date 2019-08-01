import React from 'react';
import Helmet from 'react-helmet';

import profileImg from '../images/profile_circle.png';
import './index.css';

const IndexPage = () => (
  <>
    <Helmet
      title="garrett fidalgo"
      meta={[
        { name: 'description', content: 'Garrett Fidalgo' },
        {
          name: 'keywords',
          content:
            'Garrett, Fidalgo, stripe, software, engineer, developer, San Francisco, Oakland, github, twitter',
        },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300"
        rel="stylesheet"
      />
    </Helmet>
    <div className="container">
      <header>
        <img
          className="profile"
          src={profileImg}
          width="60"
          height="60"
          alt="Profile"
        />
        <h1>
          <a href="/" className="nostyle">
            garrett fidalgo
          </a>{' '}
          <span className="location">san francisco</span>
        </h1>
      </header>
      <p>
        hi, I'm garrett. I build things and shoot photos. previously engineering
        at <a href="https://stripe.com">Stripe</a>.
      </p>
      <p>
        don't be a stranger, drop a line at{' '}
        <a href="mailto:garrett@fidalgo.io">garrett@fidalgo.io</a>.
      </p>
      <p>
        <a href="https://github.com/garrettf">github</a> /{' '}
        <a href="https://twitter.com/garrettfidalgo">twitter</a> /{' '}
        <a href="https://www.linkedin.com/in/garrettfidalgo/">linkedin</a>
      </p>
    </div>
  </>
);

export default IndexPage;
