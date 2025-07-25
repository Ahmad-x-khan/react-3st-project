import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'

function App() {
  const [thememode, setThememode] = useState('light')
   const lighttheme = () =>{ setThememode('light')}
  const darktheme = () =>{ setThememode('dark')}


  useEffect (()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(thememode)
  },[thememode])
 

  return (
    <ThemeProvider value={{thememode,lighttheme,darktheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
