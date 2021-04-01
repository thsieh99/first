import './TaxYear.css'
import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { useTranslation } from 'react-i18next'

const IncomeRange = props => {

    const { t } = useTranslation()

    const options = [
        { label: t("incomeRangeOption.01.label"), value: 1 },
        { label: t("incomeRangeOption.02.label"), value: 2 }
      ];

    const defaultOption = options[0];

//    const handleChange = e => {
//        alert(e.value)
//        props.showZip
//    }

    return (
        <div>
            <div className="Lbl">
                {t("income.label")}: 
            </div>
            <div className="Ele">
                <Dropdown options={options} value={defaultOption} onChange={props.showZip}/>
            </div>
        </div>
    )

}

export default IncomeRange