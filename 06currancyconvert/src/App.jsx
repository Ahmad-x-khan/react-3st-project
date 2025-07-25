import { useState } from 'react'
import Inputbox from '/src/component/Inputbox.jsx';
import UseCurrencyInfo from './hooks/UseCurrencyInfo'
import './App.css'


function App() {
  const [amount, setamount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("pkr")
  const [convertamount,setconvertamount ] = useState(0)
  const currencyinfo = UseCurrencyInfo(from)
  const options = Object.keys(currencyinfo)
  
   

  const swap = ()=>{
    setFrom(to)
    setTo(from)
   setconvertamount(amount)
    setamount(convertamount)
  }
  const convert = ()=>
  {setconvertamount(amount*currencyinfo[to])
}
  return (
  
     <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
     style={{backgroundImage: `url('https://images.pexels.com/photos/5716052/pexels-photo-5716052.jpeg')`}}>
          <div className='w-full my-6 '>
            <div className='w-full max-w-md mx-auto  border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-black/40 '>
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    convert()}}>
                      <div className=' w-full mb-1 '>
                        <Inputbox 
                        label="From"
                        amount={amount}
                        currencyoption = {options}
                        oncurrencychange={(currency)=>
                          setamount(amount)}
                          selectcurrency = {from} 
                           onAmountchange = {(amount)=>setamount(amount)}
                           />
                        


                      </div>
                      <div className='relative w-full h-0.5'>
                        <button type='button'
                        className=' absolute left-43 translate-x-1/2-translate-y-1/2  border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                        onClick={swap}>
                          swap
                        </button>
                      </div>
                      <div className='w-full mt-1 mb-4'>
                        <Inputbox 
                        label="To"
                         amount={convertamount}
                       currencyoption = {options}
                        oncurrencychange={(currency)=>
                          setTo(currency)
                        }
                          selectcurrency = {to}
                        />

                      </div>
                      <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                        convert {
                          from.toUpperCase()
                        }
                           to  {
                           to.toUpperCase()
                        }
                      </button>
                    </form>
            </div>

          </div>
      
     </div>
  
  )
}

export default App
