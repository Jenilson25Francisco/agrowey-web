import { Route, Routes } from 'react-router'
import { Signin } from './pages/Signin'
import { GlobalStyles } from './Styles/global-styles'
import { Signup } from './pages/Signup'

export function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}
