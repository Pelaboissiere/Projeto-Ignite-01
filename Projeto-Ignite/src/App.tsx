import { Header } from './components/Header'
import { Post, PostProps } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css'

import './global.css';

// type PostProps = typeof Post[];

const posts:PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/117678230?v=4',
      name: 'Pedro Laboissiere',
      role: 'Developer',
    },
    content: [
       {type: 'paragraph', content:'Fala galeraa 👋'},
       {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
       {type: 'link', content:'jane.design/doctorcare'}             
    ],
    publishedAt: new Date('2022-05-03 20:00:00')                                 
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/59980463?v=4',
      name: 'Danielly Moreira',
      role: 'Developer',
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'}                
    ],                          
    publishedAt: new Date('2022-05-10 20:00:00')                                 
  }
]


export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          {posts.map(post => {
            return (
              <Post 
                id={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}

export default App
