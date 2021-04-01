import React, { Component, Suspense } from 'react'
import './App.css'
import './i18n'
import HelloWorld from './HelloWorld'
import LanguageSelector from './LanguageSelector'
import TaxYear from './TaxYear'
import IncomeRange from './IncomeRange'

const App = () => {

  const triggerShowZip = () => {
    alert('Show Zip')
  }

  return (
    <div className="App">
      <div className="Comp">
        <Suspense fallback={null}>
          <p><HelloWorld /></p>
          <p><LanguageSelector /></p>
          <p><TaxYear /></p>
          <p><IncomeRange showZip={triggerShowZip} /></p>
        </Suspense>
      </div>
    </div>
  );
}

export default App
