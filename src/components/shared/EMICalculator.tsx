import { useState } from "react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="bg-card rounded-lg p-6 shadow-premium">
      <h3 className="font-heading text-xl font-bold text-foreground mb-6">EMI Calculator</h3>
      
      <div className="space-y-5">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Loan Amount</span>
            <span className="font-semibold text-foreground">₹{(loanAmount / 10000000).toFixed(1)} Cr</span>
          </div>
          <input
            type="range"
            min={1000000}
            max={100000000}
            step={500000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full accent-gold-DEFAULT h-2 rounded-full"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Interest Rate</span>
            <span className="font-semibold text-foreground">{rate}%</span>
          </div>
          <input
            type="range"
            min={6}
            max={15}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-gold-DEFAULT h-2 rounded-full"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Loan Tenure</span>
            <span className="font-semibold text-foreground">{tenure} Years</span>
          </div>
          <input
            type="range"
            min={5}
            max={30}
            step={1}
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full accent-gold-DEFAULT h-2 rounded-full"
          />
        </div>

        <div className="border-t border-border pt-4 mt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Monthly EMI</span>
            <span className="font-heading font-bold text-gold text-lg">₹{emi.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Interest</span>
            <span className="text-foreground">₹{(totalInterest / 10000000).toFixed(2)} Cr</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total Payment</span>
            <span className="text-foreground">₹{(totalPayment / 10000000).toFixed(2)} Cr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
