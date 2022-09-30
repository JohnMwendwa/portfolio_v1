import styled from "styled-components";

const ProjectsContainer = styled.div`
  text-align: center;
  padding: 100px 0;

  > p {
    color: #aaa;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 0;
  }
  > h2 {
    font-size: 2.625em;
    margin-top: 13px;
  }
`;

export default function Projects() {
  return (
    <ProjectsContainer>
      <p>Projects</p>
      <h2>Some of my Recent Work</h2>
    </ProjectsContainer>
  );
}
