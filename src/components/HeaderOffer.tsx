function HeaderOffer() {
  return (
    <div className="card card-body mt-3 shadow-sm">
      <div className="row me-1 fw-bolder">
        <div className="col">
          Nombre
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col text-end">
          Puja inicial
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col text-end">
          Puja actual
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col text-center">
          Fecha
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col text-center">
          Estado
          <i
            className="bi bi-caret-down-fill small ms-2"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderOffer;
