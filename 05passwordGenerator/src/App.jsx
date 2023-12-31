import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hoook
  const passwordRef = useRef(null);

  const passwrodGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwrodGenerator();
  }, [length, numberAllowed, characterAllowed, passwrodGenerator])

  const copyPasswordToClicpbord = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shdow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-4xl text-center text-white my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
          <button onClick={copyPasswordToClicpbord} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer ' onChange={(e) => setLength(e.target.value)} />
            <label>Length: {length}</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
              onChange={(e) => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input type="checkbox" defaultChecked={characterAllowed} id="characterInput"
              onChange={(e) => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
