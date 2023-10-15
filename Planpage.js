
import React from "react";
import StripeCheckout from "react-stripe-checkout"; // Import the StripeCheckout component
import './Plans.css';


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

  // Function to handle the Stripe token when payment is successful
  onToken = (token) => {
    console.log("Payment successful!", token);
    // You can add code here to handle the successful payment, e.g., updating user's plan.
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
                {/* Integrate Stripe Checkout here for Buy Now button */}
                <StripeCheckout
                  token={this.onToken}
                  name={plan.name}
                  currency="INR"
                  amount={plan.price * 100}
                  stripeKey="pk_test_51NzIaCSJIpB3aTBWfN9k4xuje2t2Lr2ZRcNXSum1IaRBJA7JBA2AtSytok1zIQfrDDJIDyEQEn6nFRnKCUKp0HxE00r3yv2Wzl"
                  label="Buy Now"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RechargePlans;
