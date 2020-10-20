import React from "react"
import "./resourcesResultsPanel.scss"

export default function ResourcesResultsPanel() {
  return (
    <div className="resources-results">
      <div className="resource">

        <div className="resource__columns">

          <div className="resource__col">
            <div className="resource__meta-list">
              <span class="resource__meta-item">Math</span>
              <span class="resource__meta-item">6th Grade</span>
              <span class="resource__meta-item resource__meta-item--strain">Photography</span>
            </div>
            <h2 class="resource__title">Exposing the Math in Photography</h2>
            <div class="resource__description">
              <p>In this unit, students will learn how math principles come into play in photography through balancing exposure to understand its effect on outcomes in photography. Students will analyze other students’ work through the Getty’s Unshuttered app to analyze how exposure and composition can affect message or meaning, and use what they learn to produce an original series of portraits of their peers to demonstrate their mastery. Finally, students will pair their photo series for display with equivalent expressions before completing a reflection on the intersection between math and photography.</p>
            </div>
          </div>

          <div className="resource__col">
            <div class="resource__downloads">
              <h3 className="resource__downloads-title">Downloads</h3>
              <ul class="resource__files-list">
                <li className="resource__files-list-item">
                  <a href="//assets.ctfassets.net/0yqesla6898r/61ZdODl4O1kSAlzz3OVbUJ/75d6d0991f9f4f2137626975e9e1688d/SS_Q4.pdf" download="" target="_blank" rel="noopener noreferrer">
                    Lesson Plans
                  </a>
                </li>
                <li className="resource__files-list-item">
                  <a href="//assets.ctfassets.net/0yqesla6898r/61ZdODl4O1kSAlzz3OVbUJ/75d6d0991f9f4f2137626975e9e1688d/SS_Q4.pdf" download="" target="_blank" rel="noopener noreferrer">
                    Lesson Plans
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
