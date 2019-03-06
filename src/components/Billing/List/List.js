import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactTable from "react-table";
import values from "lodash/values";

const List = ({ items }) => {
  console.log("ittt", items);
  return (
    <div className="mt-6">
      <ReactTable
        data={items}
        showPagination={false}
        defaultPageSize={items.length}
        showPaginationBottom={false}
        showPageSizeOptions={false}
        resizable={false}
        sortable={false}
        columns={[
          {
            Header: "Date",
            accessor: "date"
          },
          {
            Header: "Shipment",
            accessor: "shipmentReferenceNumber"
          },
          {
            Header: "Locations",
            accessor: "pickupLocation",
            Cell: ({ value: { name, city, state, zip } }) => (
              <div className="number truncate">
                <div className="truncate">{name}</div>
                <div className="truncate">{`${city}, ${state} ${zip}`}</div>
              </div>
            )
          },
          {
            Header: "",
            accessor: "deliveryLocation",
            Cell: ({ value: { name, city, state, zip } }) => (
              <div className="number truncate">
                <div className="truncate">{name}</div>
                <div className="truncate">{`${city}, ${state} ${zip}`}</div>
              </div>
            )
          },
          {
            Header: "Reference",
            accessor: "referenceNumber"
          },
          {
            Header: "Amount",
            accessor: "amount"
          },
          {
            Header: "Documents",
            accessor: "documents",
            Cell: ({ value }) => <div>View Docs</div>
          }
        ]}
      />
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(state => ({
  items: values(state.billing.items)
}))(List);
