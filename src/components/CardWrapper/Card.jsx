import "./Card.css"

export const Card = ({children,className}) => {
  return <div className={'main-card ' + className }>{children}</div>;
}
