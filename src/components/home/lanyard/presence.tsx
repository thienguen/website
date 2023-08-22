import usePresence from "@/hooks/lanyard/usePresence"
// 1. define all presence data type -- done
// 2. define the possible value for it -- partial

// 3. Grabbing the value and store them
// 4. Think of what we going to need
// 5. name, detail, state, application_id,

// 6. figma, kraken, vscode, notepad at max its showing 2 ALL TIME
// 7. if the user is not playing anything, activty is none
// 8. if the user is playing something, display them, this should be easy

function Presence() {
  const activities  = usePresence()
  // Visual Studio Code
  // GitKracken
  

  return (
    <>
      <div className='mx-auto flex justify-center mt-10'>
        Something
      </div>
    </>
  )
}

export default Presence