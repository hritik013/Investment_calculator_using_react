import { calculateInvestmentResults, formatter} from '../util/investment.js';
export default function Results({input}){
    const resultData=calculateInvestmentResults(input);
   const initialInvestment=
   resultData[0].valueEndOfYear-
   resultData[0].interest-
   resultData[0].annualInvestment;
   return <table id="result">
     <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Intrest(Year)</th>
            <th>Total Intrest</th>
            <th>Invested Capital</th>
        </tr>
     </thead>
     <tbody>
        {resultData.map(yearData=>{
            const totalInterest=yearData.valueEndOfYear-yearData.annualInvestment* yearData.year-initialInvestment;
           const totalAmounInvested=yearData.valueEndOfYear-totalInterest;
           return <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmounInvested)}</td>

            </tr>
        })}
     </tbody>
    </table>
}