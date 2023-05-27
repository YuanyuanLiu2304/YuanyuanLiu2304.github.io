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
              <small>Mar 2022 - June 2022 | Synnex Pty Ltd</small>
              <p className="mt-2 fw-medium">
                Implemented quality control measures to ensure that all products
                were properly inspected for damage and packaged correctly.
                <strong> Collaborated</strong> closely with my team members to
                meet daily packing quotas, which allowed us to showcase our
                <strong> strong teamwork</strong> skills and foster a positive
                work environment. In addition, maintained a clean and organized
                work area, utilizing strong{" "}
                <strong> organizational skills</strong> and attention to detail
                to streamline the packing process and increase overall
                efficiency.
              </p>
            </li>
            <li>
              <span className="bi bi-circle-fill"></span>
              <h3 className="fs-5 fw-bold">Fruit Packer</h3>
              <small>
                Nov 2021 - Mar 2022, Nov 2020 - May 2021 | Flavorite Hydroponic
                Tomatoes Pty Ltd
              </small>
              <p className="mt-2 fw-medium">
                Responsible for ensuring that only the highest quality fruits
                were packed for shipment by sorting and grading them based on
                their size and quality. Working collaboratively with other team
                members in a <strong>fast-paced</strong> environment, I
                contributed to the efficient and accurate packing of fresh fruit
                products to meet daily production quotas.
              </p>
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
              <p className="mt-2 fw-medium">
                Gained a diverse skill set in the field of computer programming,
                including
                <em className="fw-bold"> Object-Oriented programming </em>
                with <em className="fw-bold"> design patterns </em>, developing
                software applications, and designing relational databases using
                <em className="fw-bold"> SQL </em> programming with various
                platforms. I also have experience in various operating systems,
                <em className="fw-bold"> Network </em>,web programming with
                <em className="fw-bold"> HTML</em>,
                <em className="fw-bold"> CSS</em>,
                <em className="fw-bold"> JavaScript</em>, and
                <em className="fw-bold"> PHP</em>, and mobile programming using
                <em className="fw-bold"> Java</em>. Additionally, I possess
                technical writing skills, specifically in creating software
                requirements documents, design documents, and technical reports.
              </p>
            </li>
            <li>
              <span className="bi bi-circle-fill"></span>
              <h3 className="fs-5 fw-bold">Bachelor's Degree in Japanese</h3>
              <small>Sep 2015 - Jun 2019 | Yangtze Normal University</small>
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
