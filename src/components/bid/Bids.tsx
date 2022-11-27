import BidsQuickView from "./BidsQuickView";
import { Link } from "react-router-dom";
import { useGetBidsPerUserQuery } from "../../state/services/api";
import { useAppSelector } from "../../hooks/state.hooks";
import { selectId } from "../../state/slices/session";
import BidsQuickViewPlaceholder from "./BidsQuickViewPlaceholder";

function Bids() {
  const state = useAppSelector((state) => state);
  const userId = selectId(state);
  const { data, isLoading } = useGetBidsPerUserQuery({
    userId,
    itemsPerPage: 3,
  });
  return (
    <div className="container-fluid">
      <Link
        to="/perfil/pujas"
        className="small fw-bold text-muted text-decoration-none fs-6"
      >
        Tus ofertas
      </Link>
      <div className="container-fluid p-0">
        {!isLoading
          ? data.map(
              (item: {
                id: string;
                quantity: number;
                offer: { name: string; highestBid: { quantity: number } };
              }) => (
                <BidsQuickView
                  id={item.id}
                  name={item.offer.name}
                  currentOffer={item.offer.highestBid.quantity}
                  myOffer={item.quantity}
                  key={item.id}
                />
              )
            )
          : [1, 2, 3].map((item) => <BidsQuickViewPlaceholder key={item} />)}
      </div>
    </div>
  );
}

export default Bids;
