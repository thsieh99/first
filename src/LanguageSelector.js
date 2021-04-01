import React from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select';
import './TaxYear.css'

const availableLanguages = [
    { label: "English", value: "en" },
    { label: "中文 (繁體)", value: "zh-Hant" },
    { label: "Español", value: "es" }
  ];

const defaultLanguage = availableLanguages[0];

const LanguageSelector = () => {
    
    const { i18n } = useTranslation()

    const { t } = useTranslation()

    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    }

    const handleChange = e => {
        changeLanguage(e.value)
    }

    return (
        <div>
            <div className="Lbl">
                {t("language.label")}: 
            </div>
            <div className="Ele">
                <Select options={ availableLanguages } onChange={handleChange.bind(this)} />
            </div>
        </div>
    )

}

export default LanguageSelector