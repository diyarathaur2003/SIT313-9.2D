import React from "react";
import StripeCheckout from "react-stripe-checkout";
import './Plans.css';
import { Link } from "react-router-dom"

class RechargePlans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlan: null,
    };
  }

  handlePlanSelect = (plan) => {
    this.setState({
      selectedPlan: plan,
    });
  };

  togglePlanDetails = (plan) => {
    const detailsDiv = document.getElementById(`plan-details-${plan.id}`);
    detailsDiv.style.display = detailsDiv.style.display === "block" ? "none" : "block";
  };

  onToken = (token) => {
    console.log("Payment successful!", token);
  };

  render() {
    const plans = [
      {
        id: 1,
        name: "Basic",
        price: "$10",
        data: "1GB Data",
        validity: "30 Days",
        colorClass: "plan-basic",
        icon: "💡",
       
      },
      {
        id: 2,
        name: "Standard",
        price: "$20",
        data: "2GB Data",
        validity: "30 Days",
        colorClass: "plan-standard",
        icon: "🚀",
        
      },
      {
        id: 3,
        name: "Premium",
        price: "$30",
        data: "5GB Data",
        validity: "30 Days",
        colorClass: "plan-premium",
        icon: "🌟",
       
      },
    ];

    return (
      <div className="recharge-plans">
        <h2 className="recharge-plans-title">Choose a Recharge Plan</h2>
        <div className="recharge-plan-cards">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`recharge-plan-card ${plan.colorClass} ${plan === this.state.selectedPlan ? 'selected' : ''}`}
              onClick={() => this.handlePlanSelect(plan)}
            >
              <h3 className="recharge-plan-name">{plan.icon} {plan.name}</h3>
              <div className="recharge-plan-price">{plan.price}</div>
              <button className="button" onClick={() => this.togglePlanDetails(plan)}>
                {this.state.selectedPlan === plan ? "Hide Details" : "Show Details"}
              </button>
              <div id={`plan-details-${plan.id}`} className="plan-details">
                <p>{plan.data}</p>
                <p>{plan.validity}</p>
                <Link to="https://buy.stripe.com/test_4gw14r09Y5cD9BS000">
                  <button className="button">BUY NOW</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RechargePlans;
