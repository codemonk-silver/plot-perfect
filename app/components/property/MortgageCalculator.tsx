// components/property/mortgage-calculator.tsx
'use client';

import { useState } from 'react';
import { GlassCard } from '../../components/ui/GlassCard';
import { formatPrice } from '../../lib/utils';

interface MortgageCalculatorProps {
  price: number;
}

export function MortgageCalculator({ price }: MortgageCalculatorProps) {
  const [downPayment, setDownPayment] = useState(price * 0.2);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const loanAmount = price - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  
  const monthlyPayment = 
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return (
    <GlassCard intensity="low" className="p-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Mortgage Calculator
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-slate-500 mb-2 block">Down Payment</label>
          <input
            type="range"
            min={0}
            max={price * 0.5}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
          <div className="flex justify-between text-sm mt-1">
            <span className="text-slate-600 dark:text-slate-400">
              {formatPrice(downPayment)}
            </span>
            <span className="text-slate-400">
              {Math.round((downPayment / price) * 100)}%
            </span>
          </div>
        </div>

        <div>
          <label className="text-sm text-slate-500 mb-2 block">Interest Rate</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-20 px-3 py-2 bg-slate-100 dark:bg-slate-900 rounded-lg text-sm"
              step="0.1"
            />
            <span className="text-slate-600">%</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 mb-1">Estimated Monthly Payment</p>
          <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">
            {formatPrice(monthlyPayment)}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Principal & Interest only
          </p>
        </div>
      </div>
    </GlassCard>
  );
}