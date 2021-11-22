import React from 'react'

import ServiceGateways2006Pdf from '../assets/resources/Tyhurst_Jim_ServiceGateways_20060719.pdf'

const PublicationsFrameworks = () => (
  <div className="row publications-frameworks">
    <div className="three columns header-col">
      <h1>
        <span>Enterprise Application Frameworks</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <p>
            Tyhurst, James J. 2006. Services that reach from the inside out.
            Presented at Dr. Dobb's Architecture & Design World. Chicago, IL.
            July 17 - 20, 2006.
            <br />
            <a
              href={ServiceGateways2006Pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ServiceGateways2006Pdf}
            </a>
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <p>
            Tyhurst, James J. 2002. Design considerations for applications that
            use domain-specific languages. Presented at the workshop, "Using
            Domain Specific Languages to Drive Business Applications".
            Association for Computing Machinery's Conference on Object-Oriented
            Programming, Systems, Languages, and Applications (OOPSLA 2002).
            Seattle, WA. Nov. 4 - 8, 2002.
            <br />
            <a
              href="http://www.oopsla.org/2002/fp/files/wor-26.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.oopsla.org/2002/fp/files/wor-26.html
            </a>
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <p>
            Tyhurst, James J. 2001. Choosing transaction models for enterprise
            applications. Presented at the workshop, "Three-Tier Architecture
            Pattern Language". 2001 ACM Conference on Object-Oriented
            Programming Systems, Languages, and Applications (OOPSLA 2001).
            Tampa, Florida. October 14 - 18, 2001.
            <br />
            <a
              href="http://www.tyhurst.com/resources/patterns/tx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.tyhurst.com/resources/patterns/tx/
            </a>
            <br />
            <a
              href="http://www.oopsla.org/2001/fp/workshops/23.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.oopsla.org/2001/fp/workshops/23.html
            </a>
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <p>
            Tyhurst, James J. 1999. Business goals for developing an enterprise
            application integration framework. Presented at the workshop,
            "Achieving bottom-line improvements with application and enterprise
            frameworks". 1999 ACM SIGPLAN Conference on Object-Oriented
            Programming Systems, Languages, and Applications (OOPSLA '99).
            Denver, Colorado. November 1 - 5, 1999.
            <br />
            <a
              href="http://classic.sigplan.org/oopsla/oopsla99/2_ap/workshops/ws20.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://classic.sigplan.org/oopsla/oopsla99/2_ap/workshops/ws20.html
            </a>
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <p>
            Tyhurst, James J. 1998. The risks of developing a framework in an
            immature domain. Presented at the workshop, "Pragmatic issues in
            using frameworks: Implications for framework design". 1998 ACM
            SIGPLAN Conference on Object-Oriented Programming Systems,
            Languages, and Applications (OOPSLA '98). Vancouver, British
            Columbia. October 18 - 22, 1998.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default PublicationsFrameworks
