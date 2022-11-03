const React = require('react');

const Bio = () => {
  return (
    <div className="bio">
      <img
        className="bio-avatar"
        href="/static/szymon_nowicki_800.png"
        width={50}
        height={50}
        alt="Profile picture"
      />
      <p>I’m Szymon, Polish living in Germany since 2015.</p>
      <p>
        My first name translates to Simon, but I prefer{' '}
        <a
          href="https://pl.forvo.com/word/szymon/#pl"
          rel="noreferrer, noopener"
          target="_blank"
        >
          Polish pronouncing
        </a>
        .
      </p>
      <p>
        I’m a software developer, specialized in web technologies. Big fan of
        React and CSS animations.
      </p>
      <p>
        Outside of the IT world I’m busy with some politics, but you won’t find
        any political content here on this blog. This blog content is purely
        technical.
      </p>
      <p>
        If you would like to contact me, you can
        {` `}
        <a href={`https://twitter.com/${social?.twitter || ``}`}>
          find me on Twitter!
        </a>
      </p>
    </div>
  );
};

module.exports = Bio;
