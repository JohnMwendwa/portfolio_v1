import Image from "next/image";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  text-align: center;
  padding: 100px 0;
  background-color: yellow;

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
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const ProjectCard = styled.div`
  position: relative;
  width: 325px;
  min-width: 275px;
  border: 1px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  transform-origin: center;
  transition: 0.5s;
  margin-bottom: 30px;

  &:nth-child(even) {
    transform: perspective(800px) rotateY(25deg);
  }

  &:nth-child(odd) {
    transform: perspective(800px) rotateY(-25deg);
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: perspective(800px) rotateY(0deg);
  }
`;
const ImageContainer = styled.div``;

const Img = styled(Image)`
  border-radius: 10px;
`;
const ProjectInfo = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background-color: yellow;
  border: 1px solid orange;
  border-radius: 10px;
  top: 0;
  bottom: 0;
  z-index: -1;
  transition: 0.5s ease-in-out;

  & h4 {
    margin: 0;
    font-size: 28px;
  }
  & p {
    font-size: 18px;
  }

  ${ProjectCard}:hover & {
    display: flex;
    z-index: 1;
  }
`;

export default function Projects() {
  return (
    <ProjectsContainer>
      <p>My work</p>
      <h2>Projects</h2>
      <Wrapper>
        <ProjectCard>
          <ImageContainer>
            <Img
              src="/projects/chatbot.png"
              alt="chatbot image"
              width={300}
              height={300}
              layout="responsive"
            />
          </ImageContainer>

          <ProjectInfo>
            <h4>CHATBOT</h4>
            <p>
              Chat with anyone anonymously without your data getting saved in
              any database. In other words, leave no evidence behind.
            </p>
          </ProjectInfo>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer>
            <Img
              src="/projects/blog.png"
              alt="blog image"
              width={300}
              height={300}
              layout="responsive"
            />
          </ImageContainer>
          <ProjectInfo>
            <h4>BLOG</h4>
            <p>
              Created a blog for curious developers. I write weekly articles and
              sometimes daily.
            </p>
          </ProjectInfo>
        </ProjectCard>

        <ProjectCard>
          <ImageContainer>
            <Img
              src="/projects/todolist.png"
              alt="todolist image"
              width={300}
              height={300}
              layout="responsive"
            />
          </ImageContainer>
          <ProjectInfo>
            <h4>TODOLIST</h4>
            <p>
              Plan your daily tasks with this simple todo app. You can delete,
              edit and filter your tasks.
            </p>
          </ProjectInfo>
        </ProjectCard>
      </Wrapper>
    </ProjectsContainer>
  );
}
