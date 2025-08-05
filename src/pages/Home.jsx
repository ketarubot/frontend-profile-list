import '../styles/Home.css';
import Header from '../components/Header';

function Home() {
  const textList = [
    "Home : 홈화면을 볼 수 있다.",
    "Card List : 카드 리스트를 볼 수 있다.",
    "Make Card : 카드를 만들 수 있다.",
  ];

  return (
    <>
      <Header />
      <ul>
      { textList.map((content, index) => (
        <li key={index}>{content}</li>
      )) }
      </ul>
    </>
  )
}

export default Home;