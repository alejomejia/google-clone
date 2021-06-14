import HTMLHead from 'next/head'

const Head = () => {
  return (
    <HTMLHead>
      <title>Google</title>
      <link rel='icon' href='/favicon.png' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Roboto&family=Material+Icons&display=swap' rel='stylesheet' />
    </HTMLHead>
  )
}

export default Head
