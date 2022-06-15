import { Header } from "./components/Header";
import {Post} from "./components/Post";
import styles from "./App.module.css";
import "./global.css"
import { Sidebar } from "./components/Sidebar";

let posts = [
  {
      id: 1,
      author: {
          avatarUrl: "https://github.com/Paulo-P-33.png",
          name: "Luiz Paulo",
          role: "Developer Back-end"
      },
      content: [
          { type: "paragraph", content: " Fala galera" },
          { type: "paragraph", content: " Acabei de subir mai sum projeto no meu portifa. É um projeto que fiz na ultima NLW."},
          { type: "link", content: " anielle.design/doctorcare"},
      ],
      publishedAt: new Date('2022-06-14 09:33:00'),
  },
  {
      id: 2,
      author: {
          avatarUrl: "https://github.com/maykbrito.png",
          name: "Mayke Brito",
          role: "Educator @Rocketseat"
      },
      content: [
          { type: "paragraph", content: " Fala galera" },
          { type: "paragraph", content: " Acabei de subir mai sum projeto no meu portifa. É um projeto que fiz na ultima NLW."},
          { type: "link", content: " anielle.design/doctorcare"},
      ],
      publishedAt: new Date('2022-06-08 09:33:00'),
  }
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
              {
               posts.map(post => {
                 return(
                  <Post
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                  )    
               })
              }
          </main>
      </div>
    </div>
  )
}



