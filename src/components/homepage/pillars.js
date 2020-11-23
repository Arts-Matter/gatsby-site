import React from "react"
import MiniContent from '../miniContent'
import Button from "../button"
import { useWindowSize } from "../hooks"
import "./pillars.scss"

const PillarsSection = () => {
  const { width } = useWindowSize()

  // TODO: Add Contentful data
  const content = [
    {
      name: 'Student Engagement',
      title: 'Improve Student Learning In and through the Arts',
      description: 'Arts integration has a range of positive effects on student learning, including content retention, improved engagement, and persistence in pursuing positive academic outcomes.',
      link: {
        text: 'Read More',
        url: 'http://www.artsmatter.org/about?topic=student-engagement#student-engagement'
      }
    },
    {
      name: 'Teacher Development',
      title: 'Improve Teacher Capacity through Professional Development',
      description: 'Arts integration is an approach to teaching that has a positive effect on teachers, with studies showing that incorporating the arts into their toolbox of pedagogical strategies energizes teachers and enhances their enthusiasm for teaching.',
      link: {
        text: 'Read More',
        url: 'http://www.artsmatter.org/about?topic=teacher-engagement#teacher-development'
      }
    }
  ]

  return (
    <div className="section__content section--pillars__content">
      <div class="content-container">
        <div className="left">
          <h3 className="section__title section--pillars__title">
            Program Pillars
          </h3>
          <p className="section__description section--pillars__description">
            We draw upon a dynamic catalogue of content provided by top artists
            and creators to produce high-impact arts education programming for
            Los Angeles schools.
          </p>
          {width > 889 && (
            <Button
              url="/about"
              text="Go to Pillars"
              size="medium"
              theme="light"
            />
          )}
        </div>
        <div className="right">
          <MiniContent content={content} />
          {
            //TODO: Update link to go to program pillars anchor on about page
          }
          {width < 890 && (
            <Button
              url="/about"
              text="Go to Pillars"
              size="small"
              theme="light"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PillarsSection
