'use client'

import HelloButton from './components/HelloButton'

export default function Home() {
  return (
    <section style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{
        margin: 0,
        marginBottom: "12px",
        fontSize: "24px"
      }}>Welcome to My App</h1>
      <HelloButton buttonText={"Klik Di sini"} buttonText2={"Di sini juga boleh"}/>
    </section>
  )
}
