const React = require('react');
const Layout = require('./Layout');

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="lead">
        <h1>Ups, there's nothing here</h1>
        <p>
          Looks like you just requested a page that doesn't exist. Sorry for
          that.
        </p>
      </div>
    </Layout>
  );
};

module.exports = NotFoundPage;
