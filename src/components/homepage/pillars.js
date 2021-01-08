import React from "react"
import MiniContent from "../miniContent"
import Button from "../button"
import { useWindowSize } from "../hooks"
import "./pillars.scss"

const PillarsSection = () => {
  const { width } = useWindowSize()

  const content = [
    {
      name: "Student Engagement",
      title: "Improve Student Learning In and through the Arts",
      description:
        "Arts integration has a range of positive effects on student learning, including content retention, improved engagement, and persistence in pursuing positive academic outcomes.",
      link: {
        text: "Read More",
        url: "/about?topic=student-engagement#program-pillars",
      },
    },
    {
      name: "Teacher Development",
      title: "Improve Teacher Capacity through Professional Development",
      description:
        "Arts integration is an approach to teaching that has a positive effect on teachers, with studies showing that incorporating the arts into their toolbox of pedagogical strategies energizes teachers and enhances their enthusiasm for teaching.",
      link: {
        text: "Read More",
        url: "/about?topic=teacher-development#program-pillars",
      },
    },
    {
      name: "Access/Opportunity",
      title: "Increase Access to the Arts in Schools",
      description:
        "In LA County, currently 90% of schools offer some arts instruction to some students, yet less than 15% offer yearlong instruction to all students.",
      link: {
        text: "Read More",
        url: "/about?topic=access-opportunity#program-pillars",
      },
    },
    {
      name: "Creativity",
      title: "Amplify Student Voice and Expression",
      description:
        "If we’re not teaching the arts in schools, we’re telling students that creativity isn’t valued. At the heart of arts integration is engagement in the creative process",
      link: {
        text: "Read More",
        url: "/about?topic=creativity#program-pillars",
      },
    },
    {
      name: "Innovation",
      title: "Design and Develop New Media Arts Curriculum",
      description:
        "The Media Arts Standards were added to the National Core Arts Standards in 2014 and were incorporated into the California Arts Framework in 2018. But only about 6% of students are participating in Media Arts education in LA",
      link: {
        text: "Read More",
        url: "/about?topic=innovation#program-pillars",
      },
    },
    {
      name: "Jobs",
      title: "Build Career Pathways in the Local Economy",
      description:
        "1 in 7 jobs in Los Angeles County are in the creative economy. Yet thousands of public school students graduate from high school without any exposure to the skills that would prepare them for these careers in college or beyond.",
      link: {
        text: "Read More",
        url: "/about?topic=jobs#program-pillars",
      },
    },
  ]

  return (
    <div className="section__content section--pillars__content">
      <div className="content-container">
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
              url="/about#program-pillars"
              text="Go to Pillars"
              size="medium"
              theme="light"
            />
          )}
        </div>
        <div className="right">
          <MiniContent content={content} />
          {width < 890 && (
            <Button
              url="/about#program-pillars"
              text="Go to Pillars"
              size="medium"
              theme="light"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PillarsSection
