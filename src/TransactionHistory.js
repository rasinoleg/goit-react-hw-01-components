export const TransactionHistory = ({ items }) => {
    return (
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map((transactionsWrap, i) => (
            <tr key={i}>
              <td>{transactionsWrap.type}</td>
              <td>{transactionsWrap.amount}</td>
              <td>{transactionsWrap.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TransactionHistory;