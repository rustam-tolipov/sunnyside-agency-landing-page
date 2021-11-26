import { useState } from 'react';
import './GoBack.css';

const GoBack = () => {
  const [goBack, setGoBack] = useState(false);
  const handleGoBack = () => {
    setGoBack(!goBack);

    if (goBack) {
      window.history.back();
    }
  };

  return (
    <button type="button" className="go_back_button" onClick={handleGoBack}>
      <span className="go_back_button_text">Go back</span>
    </button>
  );
};

export default GoBack;
