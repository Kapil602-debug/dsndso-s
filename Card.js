function Card({ title, content }) {
  return (
    <div style={{ 
      border: '1px solid black', 
      padding: '10px', 
      margin: '10px', 
      borderRadius: '5px'
    }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
export default Card;