import { companyStructureMock, decisionCardMock, formsCardMock } from '../../mocks/events-page'
import { CardCompanyStructure } from '../CardsEventsPage/CardCompanyStructure/CardCompanyStructure'
import { CardDecisionChecking } from '../CardsEventsPage/CardDecisionChecking/CardDecisionChecking'
import { CardForms } from '../CardsEventsPage/CardForms/CardForms'
import './CardsContainerEvents.css'


export const CardsContainerEvents = () => {
    return (
        <div className="cards-container">
            <CardCompanyStructure className="card-company" {...companyStructureMock}/>
            <div className="cards-container__block">
            <CardForms className="card-forms" {...formsCardMock}/>
            <CardDecisionChecking className="card-decision" {...decisionCardMock}/>
            </div>
        </div>
    )
}