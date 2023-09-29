import { useState } from 'react'
import './App.css'

const App = () => {
  const [answer, setAnswer] = useState('');
  const responses = [
    'Evet',
    'Hayır',
    'Muhtemelen',
    'Belirsiz',
    'Daha sonra tekrar sor',
    'Kesinlikle',
    'Kuşkusuz',
    'Buna güvenebilirsin'
  ];

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const handleShake = () => {
    setAnswer(getRandomResponse());
  };

  return (
    <div className=''>
      <div className="magic-8-ball" onClick={handleShake}>
        <div className='mini-ball'>
          <div className="response">
            <p><h1>8</h1></p>
            {answer && <p>{answer}</p>}
          </div>
        </div>
      </div>
      <div>
        <input style={{width: "90%"}} type='text' placeholder="Sorununu buraya yaz"></input>
      </div>
    </div>

  );
};

export default App;
