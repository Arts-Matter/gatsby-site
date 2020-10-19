import React from "react"
import "./resourcesSearchPanel.scss"

export default function ResourcesSearchPanel() {
  return (
    <div className="resources-search-panel">
      <div className="resources-search-panel__filters">
        <h2 className="resources-search-panel__filters-title">Filter</h2>
        <div className="resources-search-panel__filter-groups">
          
        <div className="resources-filter-group">
            <h3 className="resources-filter-group__title">Subject Area</h3>
            <ul className="resources-filter-group__list">
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">English/Language Arts</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
            </ul>
          </div>

          <div className="resources-filter-group">
            <h3 className="resources-filter-group__title">Media Arts Strain</h3>
            <ul className="resources-filter-group__list">
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
            </ul>
          </div>

          <div className="resources-filter-group">
            <h3 className="resources-filter-group__title">Grade Level</h3>
            <ul className="resources-filter-group__list resources-filter-group__list--3-up">
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Kindergarden</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">7th Grade</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">Math</span>
                </label>
              </li>
              <li>
                <label className="fancy-checkbox">
                  <input type="checkbox" name="Math" />
                  <span className="fancy-checkbox__indicator"></span>
                  <span className="fancy-checkbox__text">12th Grade</span>
                </label>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <div className="resources-search-panel__search-bar">
        <h2 className="resources-search-panel__search-bar-title">or Search by Standard</h2>
        <form className="resources-search-panel__search-bar-form">
          <input placeholder="i.e. CCSS.MATH.CONTENT.K.CC.A.1" name="standard" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
