import React from 'react';
import Footer from '../../shared/Footer';

const Blogs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-20 mb-5">Our Blog</h1>
      <article className="bg-cyan-300 p-5 rounded-xl mb-5">
        <h2 className="text-2xl font-bold">
          1: improve the performance of a React Application
        </h2>
        <p>
          Several clever and performance optimization techniques are used in
          React internally to minimize the number of costly DOM operations
          required to update the UI. This generally leads to a faster user
          interface without specifically optimizing for performance for many
          cases, and there are ways where you can still speed up your React
          application. <br />
          If you’re benchmarking or facing performance-related issues in your
          React apps, you always need first to make sure that you are testing
          with the minified production build. By default, whenever we run a
          React app, it gives many helpful warnings, which are very useful in
          development. However, they also make the React app larger and slower,
          so you should use the production version when you deploy the app. So
          it is recommended to use development mode while working on the React
          app, and production mode is to be used when the app is deployed for
          the users.
        </p>
      </article>
      <article className="bg-red-300 p-5 rounded-xl mb-5">
        <h2 className="text-2xl font-bold">
          2: Different ways to manage a state in a React application
        </h2>
        <p>
          React has an excellent tool for providing data across multiple
          components. The primary goal of Context is to avoid prop-drilling. Our
          goal is to get an easy-to-use tool to manage the state in various
          scenarios likely to be encountered in enterprise applications:
          frequent updates, redesigns, the introduction of new features, and so
          on. While all this is theoretically doable with Context, it would
          require a custom solution that requires time to set up, support, and
          optimize. The only advantage of Context is that it doesn’t depend on a
          third-party library, but that can’t outweigh the effort to maintain
          this approach. In addition, React team member Sebastian Markbage has
          mentioned that the new Context API was not built and optimized for
          high-frequency updates but rather for low-frequency updateslike theme
          updates and authentication management.
        </p>
      </article>
      <article className="bg-orange-300 p-5 rounded-xl mb-5">
        <h2 className="text-2xl font-bold">3: What Is Unit Testing</h2>
        <p>
          A unit test is a way of testing a unit - the smallest piece of code
          that can be logically isolated in a system. In most programming
          languages, that is a function, a subroutine, a method or property. The
          isolated part of the definition is important. In his book "Working
          Effectively with Legacy Code", author Michael Feathers states that
          such tests are not unit tests when they rely on external systems: “If
          it talks to the database, it talks across the network, it touches the
          file system, it requires system configuration, or it can't be run at
          the same time as any other test." Modern versions of unit testing can
          be found in frameworks like JUnit, or testing tools like TestComplete.
          Look a little further and you will find SUnit, the mother of all unit
          testing frameworks created by Kent Beck, and a reference in chapter 5
          of The Art of Software Testing . Before that, it's mostly a mystery. I
          asked Jerry Weinberg about his experiences with unit testing -- "We
          did unit testing in 1956. As far as I knew, it was always done, as
          long as there were computers". Regardless of when and where unit
          testing began, one thing is for sure. Unit testing is here to stay.
          Let's look at some more practical aspects of unit testing.
        </p>
        <h2 className="text-2xl font-bold">Why should write unit tests</h2>
        <p>
          To justify any effort in business, there must be a positive impact on
          the bottom line. Here are a few benefits to writing unit tests: <br /> Unit
          tests save time and money. Usually, we tend to test the happy path
          more than the unhappy path. If you release such an app without
          thorough testing, you would have to keep fixing issues raised by your
          potential users. The time to fix these issues could’ve been used to
          build new features or optimize the existing system. Bear in mind that
          fixing bugs without running tests could also introduce new bugs into
          the system. <br /> Well-written unit tests act as documentation for your
          code. Any developer can quickly look at your tests and know the
          purpose of your functions. <br /> It simplifies the debugging process. <br /> Unit
          testing is an integral part of extreme programming. Extreme
          programming is basically a “test-everything-that-can-possibly-break”
          programming strategy. <br /> Unit tests make code reuse easier. If you want
          to reuse existing code in a new project, you can simply migrate both
          the code and tests to your new project, then run your tests to make
          sure you have the desired results. <br /> Unit testing improves code
          coverage. A debatable topic is to have 100% code coverage across your
          application. <br /> In the testing pyramid, unit tests are faster than
          integration and end-to-end. They are more assertive and return quick
          feedback.{" "}
        </p>
      </article>
      <article className="bg-amber-300 p-5 rounded-xl mb-5">
        <h2></h2>
        <p></p>
      </article>
      <article className="bg-lime-300 p-5 rounded-xl">
        <h2></h2>
        <p></p>
      </article>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;