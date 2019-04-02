interface Test {
  word: string
}

const App = (world: Test) => {
  console.log(`wow - ${world.word}`)
}

App({ word: 'test' })