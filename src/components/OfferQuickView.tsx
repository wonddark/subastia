import useToggleOpen from "../hooks/toggle-open.hooks";
import CloseOffer from "./CloseOffer";
import { formatMoney } from "../helpers/formatters.helper";

interface Props {
  id: string;
  name: string;
  currentOffer: string;
}
function OfferQuickView({ name, currentOffer }: Props) {
  const { isOpen, toggleIsOpen } = useToggleOpen();
  return (
    <div className="card card-body my-2">
      <div className="container-fluid p-0">
        <div className="row justify-content-between">
          <div className="col col-9">
            <span className="h6">{name}</span>
            <span className="small text-muted d-block">
              Puja actual: <strong>{formatMoney(currentOffer)}</strong>
            </span>
          </div>
          <div className="col col-2 mt-2">
            <i
              className="bi bi-x-circle-fill fs-6 text-primary"
              onClick={toggleIsOpen}
              title="Cerrar oferta"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      {isOpen && <CloseOffer isOpen={isOpen} toggle={toggleIsOpen} />}
    </div>
  );
}

export default OfferQuickView;
