import { Route, Routes } from 'react-router'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { GlobalStyles } from './Styles/global-styles'

export function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/singnup" element={<Signup />} />
      </Routes>
    </>
  )
}
