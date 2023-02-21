import { organizationInfoMocks } from '../../mocks/organization-page'
import { CardOrganizationInfo } from '../CardsOrganizationPage/CardOrganizationInfo/CardOrganizationInfo'
import './CardsContainerOrganization.css'

export const CardsContainerOrganization = () => {
    return (
        <div className="cards-container">
            <CardOrganizationInfo {...organizationInfoMocks}/>
        </div>
    )
}