import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Fix Your Case</h1>
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI Generated Debate Blocks</span>
        <p className="desc text-center">DebateGPT is an AI-Powered Debate Assistant</p>

        <Feed />
    </section>
  )
}

export default Home