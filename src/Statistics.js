const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export const Statistics = ({ title, stats }) => {
  const statItems = stats.map((stat, i) => (
    <li key={i} className="item">
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
      <span className="color" style={{ backgroundColor: randomColor() }}></span>
    </li>
  ));

  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {statItems}
      </ul>
    </section>
  );
};

export default Statistics;

  
