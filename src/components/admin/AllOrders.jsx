import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { getAllOrders } from '../../redux/actions/admin';
import OrderEntries from '../trackOrder/orderEntries';
import Header from '../header';
import './style.css';

export class GetAllOrders extends Component {
  state = {
    showNew: false,
    showPending: true,
    showDelivered: true,
    ordersToDisplay: [],
  }

  componentDidMount() {
    const { getAllOrders, allOrders } = this.props;
    getAllOrders()
      .then(() => {
        this.setState({ ordersToDisplay: allOrders.allOrders });
      })
      .catch((error) => {
        const { response, response: { status } } = error;
        if (response && status === 401) {
          return toast.error('Your session has expired. You need to login');
        }
        toast.error('Unknown error');
      });
  }

  toggleDiv = (status, showingDiv) => {
    const { allOrders: { allOrders } } = this.props;
    const ordersToDisplay = allOrders.filter(order => order.orderStatus === status);
    this.setState(() => ({
      showNew: true,
      showPending: true,
      showDelivered: true,
      [showingDiv]: false,
      ordersToDisplay,
    }));
  };

  render() {
    const { allOrders: { allOrders } } = this.props;
    const {
      showNew, showPending, showDelivered, ordersToDisplay
    } = this.state;

    const orderEntries = ordersToDisplay.length
      ? ordersToDisplay
      : allOrders.filter(order => order.orderStatus === 'New');

    return (
      <div>
        <div>
          <Header />
        </div>
        <div id="informationFields">
          <div id="preview">
            <h1> Hi User! Track Your Orders </h1>

            <div className="navTabs" id="navTabs">
              <a
                className={showNew ? 'navLink' : 'navLink active'}
                onClick={() => this.toggleDiv('New', 'showNew')}
              >
                NEW ORDERS
              </a>
              <a
                className={showPending ? 'navLink' : 'navLink active'}
                onClick={() => this.toggleDiv('Pending', 'showPending')}
              >
                PENDING ORDERS
              </a>
              <a
                className={showDelivered ? 'navLink' : 'navLink active'}
                onClick={() => this.toggleDiv('Delivered', 'showDelivered')}
              >
                DELIVERED ORDERS&nbsp;
              </a>
            </div>

            <div id="information">

              <div
                id="shipmentOrder"
                className="newPending-active"
              >
                <table>
                  <thead>
                    <tr>
                      <th>Pickup Location</th>
                      <th>Destination</th>
                      <th>weight(kg)</th>
                      <th>Price</th>
                      <th>Date of Order</th>
                      <th>Status</th>
                      {showPending ? null : (<th>PresentLocation</th>)}
                    </tr>

                    <OrderEntries showPending={showPending} orders={orderEntries} />

                  </thead>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GetAllOrders.propTypes = {
  getAllOrders: PropTypes.func,
  allOrders: PropTypes.object,
};
const mapStateToProps = ({ login, allOrders }) => ({ login, allOrders });

const mapDispatchToProps = ({
  getAllOrders
});

export default connect(mapStateToProps, mapDispatchToProps)(GetAllOrders);