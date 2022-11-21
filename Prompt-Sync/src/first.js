import Prompt from 'prompt-sync'

export const askName = () => {
  const p = Prompt()
  const name = p('What is your name?')
  return name
}
