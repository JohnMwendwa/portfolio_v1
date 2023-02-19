import Link from "next/link";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  text-align: center;
  padding: 100px 0;
  background-color: ${(p) => p.theme.colors.bgColor};

  > p {
    color: ${(p) => p.theme.colors.accentColor};
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 0;
  }
  > h2 {
    font-size: 2.625em;
    margin-top: 13px;
    margin-bottom: 80px;
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
  height: 350px;
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

const Img = styled.img`
  border-radius: 10px;
  object-fit: fill;
  width: 100%;
  height: 350px;
`;
const ProjectInfo = styled.div`
  display: flex;
  padding: 0 30px;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background-color: ${(p) => p.theme.colors.primaryColor};
  border: 2px solid ${(p) => p.theme.colors.accentColor};
  border-radius: 10px;
  top: 0;
  bottom: 0;
  z-index: -1;
  transition: 0.5s ease-in-out;

  & h3 {
    margin: 0;
    font-size: 28px;
    background: -webkit-linear-gradient(yellow, orange);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }
  & p {
    font-size: 20px;
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
          <div data-aos="fade-up">
            <Link
              href="https://chatbot.johnmwendwa.me"
              aria-label="visit the chatbot project site"
            >
              <a>
                <Img
                  src="/projects/chatbot.webp"
                  alt="chatbot image"
                  width={325}
                  height={350}
                />

                <ProjectInfo>
                  <h3>CHATBOT</h3>
                  <p>
                    Chat with anyone anonymously without your data getting saved
                    in any database. In other words, leave no evidence behind.
                  </p>
                </ProjectInfo>
              </a>
            </Link>
          </div>
        </ProjectCard>

        <ProjectCard>
          <div data-aos="fade-up">
            <Link
              href="https://blog.johnmwendwa.me"
              aria-label="visit my blog website"
            >
              <a>
                <Img
                  src="/projects/blog.webp"
                  alt="blog image"
                  width={325}
                  height={350}
                />

                <ProjectInfo>
                  <h3>BLOG</h3>
                  <p>
                    Created a blog for curious developers. I write weekly
                    articles and sometimes daily.
                  </p>
                </ProjectInfo>
              </a>
            </Link>
          </div>
        </ProjectCard>

        <ProjectCard>
          <div data-aos="fade-up">
            <Link
              href="https://johnmwendwa.me/todolist"
              aria-label="todolist project"
            >
              <a>
                <Img
                  src="/projects/todolist.webp"
                  alt="todolist image"
                  width={325}
                  height={350}
                />

                <ProjectInfo>
                  <h3>TODOLIST</h3>
                  <p>
                    Plan your daily tasks with this simple todo app. You can
                    delete, edit and filter your tasks.
                  </p>
                </ProjectInfo>
              </a>
            </Link>
          </div>
        </ProjectCard>
      </Wrapper>
    </ProjectsContainer>
  );
}
