import React, { Component, Suspense } from 'react'
import './App.css'
import './i18n'
import LanguageSelector from './LanguageSelector'
import TaxYear from './TaxYear'
import IncomeRange from './IncomeRange'

const App = () => {

  const triggerShowZip = () => {
    alert('Show Zip')
  }

  return (
    <div className="App">
      <p>Hello, World!</p>
      <div className="Comp">
        <Suspense fallback={null}>
          <p><LanguageSelector /></p>
          <p><TaxYear /></p>
          <p><IncomeRange showZip={triggerShowZip} /></p>
        </Suspense>
      </div>
    </div>
  );
}

export default App
