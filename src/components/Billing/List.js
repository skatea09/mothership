import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactTable from "react-table";
import values from "lodash/values";
import { format, parse, getTime } from "date-fns";
import MyPopup from "../common/MyPopup";
import { usCurrency } from "../../utils/currency";

const List = ({ items }) => {
  const Locations = ({ value: { name, city, state, zip } }) => (
    <div className="number truncate">
      <div className="truncate pb-2">{name}</div>
      <div className="truncate text-grey-darker text-xs">{`${city}, ${state} ${zip}`}</div>
    </div>
  );
  const Documents = ({ value }) => {
    const docTypes = value.map(doc => {
      if (doc.type === "billOfLading") return "BOL/POL";
      if (doc.type === "invoice") return "Invoice";
      return "Unknown";
    });
    return (
      <div className="flex">
        <div className="text-blue-dark">View Docs</div>
        <MyPopup position="bottom right">
          <div className="mr-4 ml-8 mt-2 mb-4">
            {docTypes.map(name => (
              <div className="text-grey-light mt-2 text-sm font-medium">{name}</div>
            ))}
          </div>
        </MyPopup>
      </div>
    );
  };
  return (
    <div className="mt-6">
      <ReactTable
        data={items.sort((a, b) => getTime(b.date) - getTime(a.date))}
        showPagination={false}
        defaultPageSize={items.length}
        showPaginationBottom={false}
        showPageSizeOptions={false}
        resizable={false}
        sortable={false}
        columns={[
          {
            Header: "Date",
            id: "date",
            accessor: props => format(parse(props.date), "MM/DD/YYYY")
          },
          {
            Header: "Shipment",
            accessor: "shipmentReferenceNumber"
          },
          {
            Header: "Locations",
            accessor: "pickupLocation",
            Cell: props => Locations(props)
          },
          {
            Header: "",
            accessor: "deliveryLocation",
            Cell: props => Locations(props)
          },
          {
            Header: "Reference",
            accessor: "referenceNumber"
          },
          {
            Header: "Amount",
            id: "amount",
            accessor: ({ amount }) => usCurrency(amount)
          },
          {
            Header: "Documents",
            accessor: "documents",
            Cell: props => Documents(props)
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
