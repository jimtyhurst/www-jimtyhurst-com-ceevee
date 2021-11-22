import React from 'react'

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>
            University of California, Los Angeles (
            <a
              href="http://linguistics.ucla.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UCLA
            </a>
            )
          </h3>
          <div className="info">
            <p>
              <a
                href="http://linguistics.ucla.edu/ph-d-recipients/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ph.D. in Linguistics
              </a>
              <br />
              Dissertation: "
              <a
                href="http://www.linguistics.ucla.edu/general/dissertations/Tyhurst.1990.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Logical Forms for English Sentences
              </a>
              "
            </p>
            <p>
              My dissertation investigated the relationship between syntactic
              structure and semantic interpretation, in order to develop an
              explicit model of the mapping from surface syntactic forms to a
              level of Logical Form (LF) and finally to truth values. The
              mapping from surface structure to LF was done within the framework
              of the{' '}
              <a
                href="https://en.wikipedia.org/wiki/Government_and_binding_theory"
                target="_blank"
                rel="noopener noreferrer"
              >
                Government and Binding
              </a>{' '}
              (GB) theory of grammar. A computationally tractable interpretation
              algorithm was given for mapping logical forms onto truth values
              within an extensional{' '}
              <a
                href="https://plato.stanford.edu/entries/model-theory/"
                target="_blank"
                rel="noopener noreferrer"
              >
                model-theory semantics
              </a>
              . The algorithm for interpreting logical forms was based on work
              in{' '}
              <a
                href="https://plato.stanford.edu/entries/generalized-quantifiers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                generalized quantifiers
              </a>
              , which enables one to provide a uniform interpretation for a wide
              range of determiners, including those which are not first-order
              definable (e.g. "most") and those constructed from{' '}
              <a
                href="https://www.gutenberg.org/ebooks/36884"
                target="_blank"
                rel="noopener noreferrer"
              >
                Boolean
              </a>{' '}
              combinations of determiners (e.g. "some but not all", "at least
              six but not more than twelve"). I also gave an analysis of
              referentially dependent noun phrases that inherently require a
              higher-order analysis, such as{' '}
              <a
                href="https://en.wikipedia.org/wiki/Reciprocal_pronoun"
                target="_blank"
                rel="noopener noreferrer"
              >
                reciprocals
              </a>{' '}
              (e.g. "each other", "each other's children").
            </p>
            <p>
              Honors: W.M. Keck Research Award for "Semantic Representations for
              English" project on the Connection Machine.
            </p>
          </div>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>University of California, Los Angeles (
            <a
              href="http://linguistics.ucla.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UCLA
            </a>
            )</h3>
          <p className="info">
            M.A.{' '}
            <a
              href="http://linguistics.ucla.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linguistics
            </a>
            <br />
            Thesis: "
            <a
              href="http://dla.library.upenn.edu/dla/olac/record.html?id=gial_edu_22494"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tone in Kenyang Noun Phrases
            </a>
            "
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>
            University of California, Irvine (
            <a
              href="https://www.uci.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UCI
            </a>
            )
          </h3>
          <p className="info">
            B.S.{' '}
            <a
              href="https://www.cs.uci.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computer Science
            </a>
            <br />
            B.A.{' '}
            <a
              href="https://www.math.uci.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mathematics
            </a>
            <br />
            Honors: Graduated<span className="latin-vocabulary">Cum Laude</span>
            in both degrees.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Education
