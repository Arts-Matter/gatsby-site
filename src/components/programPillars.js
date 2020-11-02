import React from "react"
import "./programPillars.scss"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

export default function ProgramPillars() {
  const pillars = [
    {
      title: "student engagement",
      subtitle: "Improve Student Learning In and through the Arts",
      content: [
        <p className="pillar__content">
          Arts integration has a range of positive effects on student learning,
          including content retention, improved engagement, and persistence in
          pursuing positive academic outcomes. Students who have access to arts
          education show deeper signs of engagement in school and in the process
          of their own learning, a vital precursor to improved achievement.
        </p>,
      ],
    },
    {
      title: "teacher development",
      subtitle: "Improve Teacher Capacity through Professional Development",
      content: [
        <p className="pillar__content">
          Arts integration is an approach to teaching that has a positive effect
          on teachers, with studies showing that incorporating the arts into
          their toolbox of pedagogical strategies energizes teachers and
          enhances their enthusiasm for teaching. The Kennedy Center states,
          “When teachers are given the authority and responsibility to reflect
          on their work and make it better, their morale and their practice
          improves. Arts integration becomes an invitation to personal growth
          and learning that changes their identity as teachers.”
        </p>,
      ],
    },
    {
      title: "access/opportunity",
      subtitle: "Increase Access to the Arts in Schools",
      content: [
        <p className="pillar__content">
          In LA County, currently 90% of schools offer some arts instruction to
          some students, yet less than 15% offer yearlong instruction to all
          students. Schools that want to increase arts instruction but do not
          have budgets for traditional arts resources can employ standards-based
          arts integration curriculum in their schools.
        </p>,
        <p className="pillar__content">
          According to the{" "}
          <a
            href="https://www.artseddata.org/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="pillar__link"
          >
            Arts Education Data Project
          </a>
          , schools across California with a high percentage of low
          socioeconomic status (SES) students provide less arts access than
          higher SES schools, adversely affecting already under-resourced
          schools where the majority of students are African American or Latinx.
        </p>,
        <p className="pillar__content">
          All standards-based lesson plans and curricular materials developed
          through ArtsMatter projects will be made available for free,
          accessible to teachers to use across classrooms nationally.
        </p>,
      ],
    },
    {
      title: "creativity",
      subtitle: "Amplify Student Voice and Expression",
      content: [
        <p className="pillar__content">
          If we’re not teaching the arts in schools, we’re telling students that
          creativity isn’t valued. At the heart of arts integration is
          engagement in the creative process. When students engage in the
          creative process, they produce original work that builds up an
          individual voice to communicate their perspectives, experiences, and
          ideas. When students know that their ideas matter, it can transform
          their relationship to their own learning and teaches them to view
          their learning as a process too.
        </p>,
      ],
    },
    {
      title: "innovation",
      subtitle: "Design and Develop New Media Arts Curriculum",
      content: [
        <p className="pillar__content">
          The Media Arts Standards were added to the National Core Arts
          Standards in 2014 and were incorporated into the California Arts
          Framework in 2018. But only about 6% of students are participating in
          Media Arts education in LA County public schools. Only 1% of middle
          school students and 9% of high school students are enrolled in Media
          Arts courses.
        </p>,
        <p className="pillar__content">
          ArtsMatter will develop high-quality and engaging media arts
          integration curriculum to build a substantial library of
          resources—including instructional strategies, lesson plans, and
          approaches to integrating media arts across content areas—available
          for the teaching of new CA and National Core Media Arts Standards to
          bring media arts and its relevant 21st Century skills into classrooms
          with the structure needed for students to learn.
        </p>,
      ],
    },
    {
      title: "jobs",
      subtitle: "Build Career Pathways in the Local Economy",
      content: [
        <p className="pillar__content">
          1 in 7 jobs in Los Angeles County are in the creative economy. Yet
          thousands of public school students graduate from high school without
          any exposure to the skills that would prepare them for these careers
          in college or beyond.
        </p>,
        <p className="pillar__content">
          Since 2011, jobs in digital media have increased and had the highest
          average salary among all creative industry sectors. Preparing students
          for the local economy is vital as they transition successfully to
          adulthood with living wage careers. As we move into the third decade
          of the 21st century, we must consider the inherent value of what
          creativity can teach as we face the challenges of increasing
          automation, robotics, and artificial intelligence to show a new path
          towards a more sustainable future.
        </p>,
      ],
    },
  ]

  const createPillarTitle = (i, title) => {
    return (
      <div className="pillar__title" tabIndex="-1">
        {`${i + 1}. ${title}`}
        <div className="expand-icon"></div>
      </div>
    )
  }

  return (
    <div className="pillars">
      <h2 className="pillars__title">Program Pillars</h2>
      <h3 className="pillars__subtitle">
        ArtsMatter draws upon a dynamic catalog of content provided by top
        creators, media companies, arts organizations, and local museums to
        produce standards-based arts education programming to support Los
        Angeles students, teachers, and schools.
      </h3>
      <Accordion allowZeroExpanded>
        {pillars.map((pillar, i) => (
          <AccordionItem className="pillar" key={`${pillar.title}${i}`}>
            <AccordionItemHeading>
              <AccordionItemButton className="accordion__button">
                {createPillarTitle(i, pillar.title)}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <h3 className="pillar__subtitle">{pillar.subtitle}</h3>
              {pillar.content.map((content, i) => (
                <React.Fragment key={`${content}${i}`}>
                  {content}
                </React.Fragment>
              ))}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
