import { lazy, Suspense } from 'react'
import PreLoader from './PreLoader'

// Lazy load the heavy Desipallet component
// This splits it into a separate chunk — browser downloads it after the shell
const Desipallet = lazy(() => import('./Desipallet'))

function App() {
  return (
    <Suspense fallback={<PreLoader />}>
      <Desipallet />
    </Suspense>
  )
}

export default App
