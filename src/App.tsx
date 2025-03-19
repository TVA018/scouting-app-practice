import './global.css'
import LabeledTextInput from './components/LabeledTextInput';

function App() {
  return (
    <>
      <div className="flex flex-col w-full justify-center my-4">
        <h1 className="text-lg text-center">
            Home
        </h1>
      </div>

      <form>
        <div className='flex flex-row w-full justify-center gap-10 my-4'>
          <LabeledTextInput id="scouter-name" name="scouter-name" width='w-xs'>Scouter Name</LabeledTextInput>
        </div>
        <div className='flex flex-row w-full justify-center gap-10 my-4'>
          <LabeledTextInput id="team-number" name="team-number" width='w-40'>Team<br/>Number</LabeledTextInput>
          <LabeledTextInput id="match-number" name="match-number" width='w-40'>Match<br/>Number</LabeledTextInput>
        </div>
      </form>
    </>
  )
}

export default App