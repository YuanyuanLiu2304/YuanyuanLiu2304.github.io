import "./resume.css";

export function Resume() {
  return (
    <div className="resume">
      <div className="subtitle">
        <span
          className="bi bi-circle-fill"
          style={{ color: "#ffd109", fontSize: "12px" }}
        ></span>
        <span>Take risks and embrace the adventure of life</span>
        <h1>Resume</h1>
      </div>

      <div className="resume_container ">
        {/* Experience */}
        <div className="resume_block">
          <h2 className="text-decoration-underline fs-3 fw-bold ps-4">
            Experience
          </h2>

          <ul className="resume_experience list-unstyled mt-4">
            <li>
              <span className="bi bi-circle-fill"></span>
              <h3 className="fs-5 fw-bold">Warehouse Packer</h3>
              <small>Mar 2022 - June 2022 | Synnex Pty Ltd, Australia</small>
              <ul className="experience_context mt-2 ps-3 fw-medium">
                <li>
                  Increased customer loyalty by 80% through meticulous
                  implementation of quality control measures, ensuring{" "}
                  <strong>attention to detail</strong> and enhancing the overall
                  customer experience.
                </li>
                <li>
                  Contributed to a positive work environment and demonstrated
                  strong <strong>teamwork</strong> skills by collaborating with
                  team members to consistently meet daily packing quotas.
                </li>
                <li>
                  Enhanced overall efficiency by streamlining the packing
                  process through meticulous organization and maintenance of a
                  clean work area, showcasing exceptional{" "}
                  <strong>organizational</strong> skills.
                </li>
              </ul>
            </li>
            <li>
              <span className="bi bi-circle-fill"></span>
              <h3 className="fs-5 fw-bold">All-Rounder</h3>
              <small>Feb 2020 - May 2020 | Boddington Hotel, Australia</small>
              <ul className="experience_context mt-2 ps-3 fw-medium">
                <li>
                  Demonstrated <strong>adaptability</strong> skill by
                  transitioning between different departments, including front
                  desk, food and beverage, and housekeeping to ensure smooth
                  operations and meet guest needs.
                </li>
                <li>
                  Exhibited <strong>multitasking</strong> capabilities by
                  managing guest check-ins and check-outs, promptly addressing
                  inquiries, resolving issues, and coordinating room
                  assignments.
                </li>
                <li>
                  Effectively managed time and{" "}
                  <strong>prioritized tasks</strong> to ensure efficient
                  workflow and timely delivery of services, resulting in
                  positive feedback and satisfaction from guests.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Education */}
        <div className="resume_block">
          <h2 className="text-decoration-underline fs-3 fw-bold ps-4">
            Education
          </h2>

          <ul className="resume_experience list-unstyled mt-4">
            <li>
              <span className="bi bi-circle-fill"></span>
              <h3 className="fs-5 fw-bold">Diploma in Computer Programming</h3>
              <small>Sep 2022 - present | Algonquin College</small>
              <ul className="education_context mt-2 ps-3 fw-medium">
                <li>
                  <strong>Programming</strong>: Java, XML, SQL, HTML/CSS,
                  JavaScript, TypeScript, PHP, COBOL, Shell Scripting
                </li>
                <li>
                  <strong>Databases</strong>: MySQL, Oracle, PostgreSQL,
                  Microsoft SQL Server, Microsoft Access
                </li>
                <li>
                  <strong>Network</strong>: HTTP, TCP, UDP, IP, OSI model,
                  socket and multi-threading programming
                </li>
                <li>
                  <strong>Operating Systems</strong>: Windows, MacOS, Linux,
                  Android
                </li>
                <li>
                  <strong>Frameworks/Libraries</strong>: Spring Boot, MyBatis,
                  JUnit, React, Angular, Bootstrap, Axios, JSON
                </li>
                <li>
                  <strong>Software & Tools</strong>: Agile, Git, Maven, JDBC,
                  UML, SpringToolSuite4, Eclipse, Android Studio, VS Code,
                  Microsoft Office Suite
                </li>
              </ul>
            </li>
            <li>
              <span className="bi bi-circle-fill"></span>
              <h3 className="fs-5 fw-bold">Bachelor's Degree in Japanese</h3>
              <small>2015 - 2019 | Yangtze Normal University, China</small>
              <p className="mt-2 fw-medium">
                During my studies, I acquired a strong understanding of the
                language and culture. Additionally, I gained knowledge in
                Japanese economics, which provided me with an insight into the
                country's business practices and policies. I also studied
                Japanese culture, which enabled me to appreciate and understand
                Japan's customs and social practices.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
