
import { organizationHeaderMocks } from "../../../mocks/organization-page";
import { CardsContainerOrganization } from "../../CardsContainerOrganization/CardsContainerOrganization";

import { OrganizationHeader } from "../../CardsOrganizationPage/OrganizationHeader/OrganizationHeader";


export const Organization = () => {
  return (
    <div className="container">
      <OrganizationHeader {...organizationHeaderMocks}/>
      <CardsContainerOrganization/>
    </div>
  );
};