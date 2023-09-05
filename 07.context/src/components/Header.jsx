import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const Header = () => {
    const {isDark, user} = useContext(ThemeContext)

  const styldDiv = {
    backgroundColor: isDark?'black':'white',
    color: isDark? 'white' : 'black',
  }
    
//   return (
//     <div className='header' 
//     style={{
//       backgroundColor: isDark?'black':'white',
//       color: isDark? 'white' : 'black',
//     }}>
//     <h1>Welcome {user}!</h1>
//     </div>
//   )
// }

return (
  <div className={`header ${isDark? 'header-dark':''}`} >
  <h1>Welcome {user}!</h1>
  </div>
)
}
export default Header