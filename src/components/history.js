import React from "react"
import "./history.scss"

export default function History() {
  return (
    <div className="history">
      <h2 className="history__title">History</h2>
      <div className="history__wrapper">
        <div className="history__section-left">
          <h3 className="history__sub-heading">
            The LA Promise Fund launched ArtsMatter in October 2012 to address
            the need for increased arts opportunities and creativity in LAUSD.
            At the time, only 2% of elementary school instructional time in
            LAUSD classrooms was being devoted to the arts.
          </h3>
          <p className="history__content">
            An city-wide outdoor campaign was created featuring inspiring work
            by contemporary artists including Barbara Kruger, John Baldessari
            and Shepard Fairey. It raised $1 million to be distributed to
            various arts partners, including CalArts, the J. Paul Getty Museum,
            the Music Center, Mattel, and Urban Arts Partnership to bring more
            of the arts to more students across Los Angeles County.
          </p>
          <p className="history__content">
            In 2016, ArtsMatter once again partnered with the Getty through
            their Pacific Standard Time: LA/LA initiative. In collaboration with
            LAUSD's Arts Education Branch, ArtsMatter created the PST: LA/LA
            Education Program,available to LA County schools during the 2017-18
            Academic Year. It included teacher workshops, student field trips
            and family days at PST: LA/LA exhibitions, a grant program for
            teachers to activate their larger school communities in arts-making,
            and a county-wide Student Arts Contest.
          </p>
        </div>
        <div className="history__section--right">
          <div className="stats-panel">
            <div className="stats-panel__section">
              <div className="stats-panel__title">
                Access to all required arts disciplines
              </div>
              <div className="stats-panel__content">
                <h4 className="stats-panel__header">
                  Los Angeles County Students
                </h4>
                <h2 className="stats-panel__stat">25%</h2>
                <h4 className="stats-panel__header">
                  Los Angeles County Schools
                </h4>
                <h2 className="stats-panel__stat">12%</h2>
              </div>
            </div>
            <div className="stats-panel__section">
              <div className="stats-panel__title">
                Media arts enrollment in schools
              </div>
              <div className="stats-panel__content">
                <h4 className="stats-panel__header">High School Students</h4>
                <h2 className="stats-panel__stat">12%</h2>
                <h4 className="stats-panel__header">Middle School Students</h4>
                <h2 className="stats-panel__stat">1%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
