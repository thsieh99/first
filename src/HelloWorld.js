import './TaxYear.css'
import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { useTranslation } from 'react-i18next'

const HelloWorld = props => {

    const { t } = useTranslation()

    return (
        <div>
            <div className="Ttl">
                {t("helloworld.label")}
            </div>
        </div>
    )

}

export default HelloWorld