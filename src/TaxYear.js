import './TaxYear.css'
import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { useTranslation } from 'react-i18next'

const TaxYear = () => {

    const options = [
        '2020', '2019', '2018'
      ];
    
    const defaultOption = options[0];

    const { t } = useTranslation()

    return (
        <div>
            <div className="Lbl">
                {t("taxyear.label")}: 
            </div>
            <div className="Ele">
                <Dropdown options={options} value={defaultOption} />
            </div>
        </div>
    )

}

export default TaxYear