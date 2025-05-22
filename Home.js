import Card from './Card';
import ImageSlider from './ImageSlider';

function Home() {
  return (
    <div>
      <h1>Welcome to My Website!</h1>
      <ImageSlider />
      <Card title="First Card" content="This is my first reusable card!" />
      <Card title="Second Card" content="Wow, the same component works again!" />
    </div>
  );
}
export default Home;