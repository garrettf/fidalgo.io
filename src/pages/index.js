import React from 'react';
import Helmet from 'react-helmet';

import profileImg from '../images/profile_circle.png';
import './index.css';

function Section({ emoji, children, ...props }) {
  return (
    <section {...props}>
      <h3>{emoji}</h3>
      <p>{children}</p>
    </section>
  );
}

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
        href="https://fonts.googleapis.com/css?family=Nunito:400,600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className="container">
      <header>
        <h1>garrett fidalgo</h1>
        <h2>oakland + sf</h2>
      </header>
      <div className="sections">
        <Section emoji="👋">
          hi, I'm garrett. I like to make things with computers.
        </Section>
        <Section emoji="👨‍💻">
          I build tools for collaboration at{' '}
          <a href="https://notion.so">Notion</a>. prior to that I was building
          APIs and other products at <a href="https://stripe.com">Stripe</a>.
        </Section>
        <Section emoji="💡">
          I enjoy working on public API design and engineering processes that
          help create better user experiences.
        </Section>
        <Section emoji="🏃‍♂️">
          during the rest of my time, I also like to run, shoot photos, make
          pottery, and share music among other things.
        </Section>

        <Section emoji="📩">
          don't be a stranger. drop a line at{' '}
          <a href="mailto:garrett@fidalgo.io">garrett@fidalgo.io</a>. you can
          also find me on <a href="https://github.com/garrettf">github</a> or{' '}
          <a href="https://www.linkedin.com/in/garrettfidalgo/">linkedin</a> if
          you need to.
        </Section>
      </div>
    </div>
  </>
);

export default IndexPage;
